import { supabase } from "./supabase";

const IMAGE_BUCKET = "images";

export async function uploadImage(file: File) {
  const avatarFile = file;
  return supabase.storage.from(IMAGE_BUCKET).upload(`public/images/${file.name}`, avatarFile, {
    cacheControl: "3600",
    upsert: false,
  });
}

const normalizeImagePath = (pathOrFullPath: string) =>
    pathOrFullPath.startsWith(`${IMAGE_BUCKET}/`)
      ? pathOrFullPath.slice(IMAGE_BUCKET.length + 1)
      : pathOrFullPath;

export function getPublicImageUrl(pathOrFullPath: string) {
  const normalizedPath = normalizeImagePath(pathOrFullPath);
  return supabase.storage.from(IMAGE_BUCKET).getPublicUrl(normalizedPath).data.publicUrl;
}

export async function removeImages(paths: string[]) {
  const normalizedPaths = paths.map(normalizeImagePath).filter(Boolean);
  if (normalizedPaths.length === 0) {
    return { data: [], error: null };
  }
  return supabase.storage.from(IMAGE_BUCKET).remove(normalizedPaths);
}
