import { removeImages } from "./images";
import { supabase } from "./supabase";

export type ThoughtItem = {
    id: number;
    topic_id: number;
    title: string;
    subtitle: string | null;
    date: string | null;
    content: string;
    images: string[];
  };
  
export type ThoughtTopic = {
  id: number;
  label: string;
  items: ThoughtItem[];
};

export type NewThoughtItem = {
  topic_id: number;
  title: string;
  subtitle?: string | null;
  date?: string | null;
  content: string;
  images?: string[];
};

export type UpdateThoughtTopic = {
  id: number;
  label: string;
};

export type UpdateThoughtItem = {
  id: number;
  topic_id: number;
  title: string;
  subtitle?: string | null;
  date?: string | null;
  content: string;
  images?: string[];
};
  
export const fetchThoughtTopics = async (): Promise<ThoughtTopic[]> => {
    const addedTopics: ThoughtTopic[] = [];
    const { data: topicRows, error: topicError } = await supabase
      .from("thought_topics")
      .select("id,label");

    if (topicError) {
      console.error(topicError);
      return [];
    }
    
    for (const topic of topicRows ?? []) {
      const { data: itemRows, error: itemError } = await supabase
        .from("thought_items")
        .select("id,topic_id,title,subtitle,date,content,images")
        .eq("topic_id", topic.id);

      if (itemError) {
        console.error(itemError);
        continue;
      }

      // sorting the thought items in reverse added time
      // since date is in Burmese, I will just rely on id
      let addedTopicItems = [] as ThoughtItem[];
      if (itemRows) {
        addedTopicItems = itemRows.sort((a, b) => b.id - a.id);
      }
      
      const addedTopic = {
        id: topic.id,
        label: topic.label,
        items: addedTopicItems,
      }
      addedTopics.push(addedTopic);
      
    }
    return addedTopics;
  };

export const addThoughtTopic = async (
  label: string
): Promise<ThoughtTopic | null> => {
  const { data: topicRow, error: topicError } = await supabase
    .from("thought_topics")
    .insert([{ label }])
    .select("id,label")
    .single();

  if (topicError) {
    console.error(topicError);
    return null;
  }

  if (!topicRow) return null;

  return {
    id: topicRow.id,
    label: topicRow.label,
    items: [],
  };
};

export const addThoughtItem = async (
  item: NewThoughtItem
): Promise<ThoughtItem | null> => {
  const insertItem = {
    topic_id: item.topic_id,
    title: item.title,
    subtitle: item.subtitle ?? null,
    date: item.date ?? null,
    content: item.content,
    images: item.images ?? [],
  };

  const { data: itemRow, error: itemError } = await supabase
    .from("thought_items")
    .insert([insertItem])
    .select("id,topic_id,title,subtitle,date,content,images")
    .single();

  if (itemError) {
    console.error(itemError);
    return null;
  }

  return (itemRow ?? null) as ThoughtItem | null;
};

export const updateThoughtTopic = async (
  topic: UpdateThoughtTopic
): Promise<ThoughtTopic | null> => {
  const { data: topicRow, error: topicError } = await supabase
    .from("thought_topics")
    .update({ label: topic.label })
    .eq("id", topic.id)
    .select("id,label")
    .single();

  if (topicError) {
    console.error(topicError);
    return null;
  }

  if (!topicRow) return null;

  return {
    id: topicRow.id,
    label: topicRow.label,
    items: [],
  };
};

export const deleteThoughtTopic = async (topicId: number): Promise<boolean> => {
  const { error: topicError } = await supabase
    .from("thought_topics")
    .delete()
    .eq("id", topicId);

  if (topicError) {
    console.error(topicError);
    return false;
  }

  return true;
};

export const updateThoughtItem = async (
  item: UpdateThoughtItem
): Promise<ThoughtItem | null> => {
  const { data: existingRow, error: fetchError } = await supabase
    .from("thought_items")
    .select("images")
    .eq("id", item.id)
    .single();

  if (fetchError) {
    console.error(fetchError);
    return null;
  }

  const existingImages = existingRow?.images ?? [];
  const nextImages = item.images ?? [];
  const removedImages = existingImages.filter((path: string) => !nextImages.includes(path));

  const updateItem = {
    topic_id: item.topic_id,
    title: item.title,
    subtitle: item.subtitle ?? null,
    date: item.date ?? null,
    content: item.content,
    images: nextImages,
  };

  const { data: itemRow, error: itemError } = await supabase
    .from("thought_items")
    .update(updateItem)
    .eq("id", item.id)
    .select("id,topic_id,title,subtitle,date,content,images")
    .single();

  if (itemError) {
    console.error(itemError);
    return null;
  }

  if (removedImages.length > 0) {
    const { error: removeError } = await removeImages(removedImages);
    if (removeError) {
      console.error(removeError);
    }
  }

  return (itemRow ?? null) as ThoughtItem | null;
};

export const deleteThoughtItem = async (itemId: number): Promise<boolean> => {
  const { data: itemRow, error: fetchError } = await supabase
    .from("thought_items")
    .select("images")
    .eq("id", itemId)
    .single();

  if (fetchError) {
    console.error(fetchError);
    return false;
  }

  const imagePaths = itemRow?.images ?? [];
  if (imagePaths.length > 0) {
    const { error: removeError } = await removeImages(imagePaths);
    if (removeError) {
      console.error(removeError);
      return false;
    }
  }

  const { error: itemError } = await supabase
    .from("thought_items")
    .delete()
    .eq("id", itemId);

  if (itemError) {
    console.error(itemError);
    return false;
  }

  return true;
};
