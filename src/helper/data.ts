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
      
      const addedTopicItems = (itemRows ?? []) as ThoughtItem[];
      
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
