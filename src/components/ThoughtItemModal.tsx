import { useEffect, useId, useState, type ChangeEvent, type FormEvent } from "react";
import type { NewThoughtItem, ThoughtItem, ThoughtTopic } from "../helper/data";
import { getPublicImageUrl, uploadImage } from "../helper/images";

type ThoughtItemModalProps = {
  open: boolean;
  topics: ThoughtTopic[];
  initialTopicId: number | null;
  initialItem?: ThoughtItem | null;
  title?: string;
  submitLabel?: string;
  onClose: () => void;
  onSubmit: (item: NewThoughtItem) => Promise<void> | void;
};

type FormState = {
  topicId: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
  images: string[];
};

const defaultFormState: FormState = {
  topicId: "",
  title: "",
  subtitle: "",
  date: "",
  content: "",
  images: [],
};

export default function ThoughtItemModal({
  open,
  topics,
  initialTopicId,
  initialItem = null,
  title = "Add Thought Item",
  submitLabel = "Save Item",
  onClose,
  onSubmit,
}: ThoughtItemModalProps) {
  const [formState, setFormState] = useState<FormState>(defaultFormState);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const uploadInputId = useId();

  useEffect(() => {
    if (!open) return;
    if (initialItem) {
      setFormState({
        topicId: String(initialItem.topic_id),
        title: initialItem.title,
        subtitle: initialItem.subtitle ?? "",
        date: initialItem.date ?? "",
        content: initialItem.content,
        images: initialItem.images ?? [],
      });
      return;
    }

    setFormState({
      ...defaultFormState,
      topicId: initialTopicId ? String(initialTopicId) : topics[0]?.id ? String(topics[0].id) : "",
    });
  }, [open, initialItem, initialTopicId, topics]);

  if (!open) return null;

  const handleChange = (field: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formState.topicId) return;
    if (isUploading) return;

    const images = formState.images;

    await onSubmit({
      topic_id: Number(formState.topicId),
      title: formState.title.trim(),
      subtitle: formState.subtitle.trim() || null,
      date: formState.date.trim() || null,
      content: formState.content.trim(),
      images,
    });

    setFormState(defaultFormState);
    onClose();
  };

  const uploadFiles = async (files: File[]) => {
    setUploadError(null);
    setIsUploading(true);

    const uploadedFiles = await Promise.all(files.map(uploadImage));

    const uploadedPaths = uploadedFiles
      .map((result) => result.data?.fullPath)
      .filter((path): path is string => Boolean(path));


    const failedCount = uploadedFiles.filter((result) => result.error).length;
    if (failedCount > 0) {
      setUploadError("Some images could not be uploaded. Please try again.");
    }

    if (uploadedPaths.length > 0) {
      setFormState((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedPaths],
      }));
    }


    setIsUploading(false);
  };

  const handleImageFilesChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.currentTarget?.files ?? []);
    if (files.length === 0) return;
    await uploadFiles(files);
    event.currentTarget.value = '';
  };

  const handleDrop = async (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files ?? []).filter((file) =>
      file.type.startsWith("image/")
    );
    if (files.length === 0) return;
    await uploadFiles(files);
  };

  const handleRemoveImage = (path: string) => {
    setFormState((prev) => ({
      ...prev,
      images: prev.images.filter((image) => image !== path),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-950/30 p-4">
      <div className="w-full max-w-xl max-h-[80vh] overflow-y-auto rounded-2xl border border-sky-100 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-sky-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full border border-sky-200 px-2 py-1 text-sm text-sky-700 hover:bg-sky-50"
            aria-label="Close add thought item modal"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <label className="block">
            <span className="text-sm font-medium text-sky-800">Topic</span>
            <select
              value={formState.topicId}
              onChange={handleChange("topicId")}
              required
              className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
            >
              <option value="" disabled>
                Select a topic
              </option>
              {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-sky-800">Title</span>
            <input
              type="text"
              value={formState.title}
              onChange={handleChange("title")}
              required
              className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-sky-800">Subtitle</span>
            <input
              type="text"
              value={formState.subtitle}
              onChange={handleChange("subtitle")}
              className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-sky-800">Date</span>
            <input
              type="text"
              value={formState.date}
              onChange={handleChange("date")}
              className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-sky-800">Content</span>
            <textarea
              value={formState.content}
              onChange={handleChange("content")}
              required
              rows={5}
              className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-sky-800">
              Images
            </span>
            

            {<div className="flex items-center justify-center w-full">
              <label
                htmlFor={uploadInputId}
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
                className="flex flex-col items-center justify-center w-full h-64 rounded-xl border border-dashed border-sky-200 bg-sky-50/60 text-sky-800 cursor-pointer hover:bg-sky-100 transition"
              >
                <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"/></svg>
                  <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs">SVG, PNG, JPG</p>
                </div>
                <input
                  id={uploadInputId}
                  type="file"
                  className="hidden"
                  multiple
                  accept="image/*"
                  onChange={handleImageFilesChange}
                />
              </label>
            </div>}

            {isUploading && (
              <p className="mt-2 text-xs text-sky-600">Uploading images...</p>
            )}

            {uploadError && (
              <p className="mt-2 text-xs text-rose-600">{uploadError}</p>
            )}

            {formState.images.length > 0 && (
              <div className="mt-3 space-y-2 text-xs text-sky-700">
                <span className="font-semibold">Attached:</span>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {formState.images.map((imagePath) => (
                    <div
                      key={imagePath}
                      className="flex items-center gap-2 rounded-lg border border-sky-100 bg-white p-2"
                    >
                      <img
                        src={getPublicImageUrl(imagePath)}
                        alt="Uploaded"
                        className="h-10 w-10 rounded-md object-cover"
                        loading="lazy"
                      />
                      <span className="flex-1 truncate">
                        {imagePath.split("/").pop()}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(imagePath)}
                        className="rounded-full border border-sky-200 px-2 py-1 text-[11px] text-sky-700 hover:bg-sky-50"
                        aria-label="Remove image"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </label>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-700 hover:bg-sky-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
