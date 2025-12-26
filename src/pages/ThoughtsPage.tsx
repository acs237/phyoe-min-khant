import { useMemo, useState, useEffect } from "react";
import NavBar from "../components/NavBar";

import ThoughtItemModal from "../components/ThoughtItemModal";
import DeleteThoughtModal from "../components/DeleteThoughtModal";
import EditThoughtTopicModal from "../components/EditThoughtTopicModal";
import { ThoughtsLeftCol } from "../components/ThoughtsLeftCol";
import {
  addThoughtItem,
  addThoughtTopic,
  deleteThoughtItem,
  deleteThoughtTopic,
  fetchThoughtTopics,
  type NewThoughtItem,
  type ThoughtItem,
  type ThoughtTopic,
  updateThoughtItem,
  updateThoughtTopic,
} from "../helper/data";
import { ThoughtsRightCol } from "../components/ThoughtsRightCol";
import { ThoughtsHeader } from "../components/ThoughtsHeader";
import { getUser } from "../helper/auth";
import { supabase } from "../helper/supabase";


/**
 * PersonalJourneyPage
 * - SPA-friendly page for a personal portfolio
 * - Left: vertical topic list (buttons)
 * - Right: grid of "button boxes" for the selected topic
 * - Clicking a box toggles a collapsible content panel directly beneath it
 *
 * Styling: TailwindCSS
 */
export default function Thoughts() {

  // admin check
  const [isAdmin, setIsAdmin] = useState(false);

  // ---- Data model ---------------------------------------------------------
  // Edit/extend freely. Each topic has a unique `id`, a display `label`,
  // and a list of `items`, where each item has an `id`, `title`, and `content`.
  const [topics, setTopics] = useState<ThoughtTopic[]>([]);

  // Currently selected topic
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [isEditItemOpen, setIsEditItemOpen] = useState(false);
  const [isAddTopicOpen, setIsAddTopicOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [openItemMenuId, setOpenItemMenuId] = useState<number | null>(null);
  const [editTopicId, setEditTopicId] = useState<number | null>(null);
  const [deleteTopicId, setDeleteTopicId] = useState<number | null>(null);
  const [editItemId, setEditItemId] = useState<number | null>(null);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

  // Track expanded items per topic (so switching topics remembers open panels)
  const [expandedByTopic, setExpandedByTopic] = useState<Record<string, Set<number>>>(
    () => Object.fromEntries(topics.map((t) => [String(t.id), new Set()]))
  );

  const selectedTopic = useMemo(
    () => topics.find((t) => t.id === selectedId) ?? null,
    [selectedId, topics]
  );

  const toggleItem = (topicId: number, id: number) => {
    setExpandedByTopic((prev) => {
      const copy: Record<string, Set<number>> = Object.fromEntries(
        Object.entries(prev).map(([k, v]) => [k, new Set(v as Set<number>)])
      );
      const set = copy[String(topicId)] ?? new Set<number>();
      if (set.has(id)) set.delete(id);
      else set.add(id);
      copy[String(topicId)] = set;
      return copy;
    });
  };

  const isExpanded = (topicId: number, id: number) =>
    expandedByTopic[String(topicId)]?.has(id);

  useEffect(() => {
    const fetch = async () => {
      let addedTopics = await fetchThoughtTopics();
      addedTopics = [...addedTopics].sort((a, b) => a.id - b.id);
      setTopics(addedTopics);
      setSelectedId((prev) => prev ?? addedTopics[0]?.id ?? null);
    };
    
    fetch();
  }, []); 

  useEffect(() => {
    const checkAdmin = async () => {
      const { data } = await getUser();
      setIsAdmin(!!data.user);
      const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsAdmin(!!session);
      });
      return () => sub.subscription.unsubscribe();
    }
    checkAdmin();
  }, []);

  const handleAddThoughtTopic = async (newThoughtTopic: string) => {
    const newTopic = await addThoughtTopic(newThoughtTopic);
    if (!newTopic) return;
    setTopics((prev) => [...prev, newTopic]);
    setSelectedId((prev) => prev ?? newTopic.id);
  };

  const handleAddThoughtItem = async (item: NewThoughtItem) => {
    const newItem = await addThoughtItem(item);
    if (!newItem) return;
    setTopics((prev) =>
      prev.map((topic) =>
        topic.id === newItem.topic_id
          ? { ...topic, items: [...topic.items, newItem] }
          : topic
      )
    );
    setSelectedId((prev) => prev ?? newItem.topic_id);
  };

  const handleEditTopic = async (topicId: number, nextLabel: string) => {
    const trimmedLabel = nextLabel.trim();
    if (!trimmedLabel) return;

    const updatedTopic = await updateThoughtTopic({
      id: topicId,
      label: trimmedLabel,
    });
    if (!updatedTopic) return;

    setTopics((prev) =>
      prev.map((topic) =>
        topic.id === topicId ? { ...topic, label: updatedTopic.label } : topic
      )
    );
  };

  const handleDeleteTopic = async (topicId: number) => {
    const deleted = await deleteThoughtTopic(topicId);
    if (!deleted) return;

    setTopics((prev) => {
      const remaining = prev.filter((topic) => topic.id !== topicId);
      setSelectedId((prevSelected) =>
        prevSelected === topicId ? remaining[0]?.id ?? null : prevSelected
      );
      return remaining;
    });
  };

  const handleDeleteThoughtItem = async (itemId: number) => {
    const deleted = await deleteThoughtItem(itemId);
    if (!deleted) return;

    setTopics((prev) =>
      prev.map((topic) => ({
        ...topic,
        items: topic.items.filter((item) => item.id !== itemId),
      }))
    );
  };

  const handleUpdateThoughtItem = async (
    itemId: number,
    item: NewThoughtItem
  ) => {
    const updatedItem = await updateThoughtItem({
      id: itemId,
      topic_id: item.topic_id,
      title: item.title,
      subtitle: item.subtitle,
      date: item.date,
      content: item.content,
      images: item.images,
    });
    if (!updatedItem) return;

    setTopics((prev) => {
      let nextTopics = prev.map((topic) => ({
        ...topic,
        items: topic.items.filter((existing) => existing.id !== itemId),
      }));
      nextTopics = nextTopics.map((topic) =>
        topic.id === updatedItem.topic_id
          ? { ...topic, items: [...topic.items, updatedItem] }
          : topic
      );
      return nextTopics;
    });
  };

  const activeEditItem: ThoughtItem | null =
    topics
      .flatMap((topic) => topic.items)
      .find((item) => item.id === editItemId) ?? null;

  const activeDeleteItem: ThoughtItem | null =
    topics
      .flatMap((topic) => topic.items)
      .find((item) => item.id === deleteItemId) ?? null;


  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Nav Bar */}
      <NavBar />
      
      {/* Page container */}
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        {/* Title */}
        <ThoughtsHeader />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">
          {/* Left: Display topics */}
          <ThoughtsLeftCol
            topics={topics}
            selectedId={selectedId}
            openMenuId={openMenuId}
            setSelectedId={setSelectedId}
            setOpenMenuId={setOpenMenuId}
            setEditTopicId={setEditTopicId}
            setDeleteTopicId={setDeleteTopicId}
            onAddTopicRequest={() => setIsAddTopicOpen(true)}
            onAddItem={() => setIsAddItemOpen(true)}
            isAdmin={isAdmin}
          />
        
          {/* Right: Item boxes for selected topic */}
          <ThoughtsRightCol
            selectedTopic={selectedTopic}
            isExpanded={isExpanded}
            toggleItem={toggleItem}
            openItemMenuId={openItemMenuId}
            setOpenItemMenuId={setOpenItemMenuId}
            onEditItem={(id) => {
              setEditItemId(id);
              setIsEditItemOpen(true);
            }}
            onDeleteItem={setDeleteItemId}
            isAdmin={isAdmin}
          />

        </div>
      </div>
      </div>
      <ThoughtItemModal
        open={isAddItemOpen}
        topics={topics}
        initialTopicId={selectedId}
        onClose={() => setIsAddItemOpen(false)}
        onSubmit={handleAddThoughtItem}
      />
      <ThoughtItemModal
        open={isEditItemOpen}
        topics={topics}
        initialTopicId={selectedId}
        initialItem={activeEditItem}
        title="Edit Thought Item"
        submitLabel="Save Changes"
        onClose={() => {
          setIsEditItemOpen(false);
          setEditItemId(null);
        }}
        onSubmit={(item) => {
          if (editItemId === null) return;
          return handleUpdateThoughtItem(editItemId, item);
        }}
      />
      <EditThoughtTopicModal
        open={editTopicId !== null}
        topic={topics.find((topic) => topic.id === editTopicId) ?? null}
        onClose={() => setEditTopicId(null)}
        onSubmit={(nextLabel) => {
          if (editTopicId === null) return;
          return handleEditTopic(editTopicId, nextLabel);
        }}
      />
      <EditThoughtTopicModal
        open={isAddTopicOpen}
        title="Add Topic"
        submitLabel="Add Topic"
        initialLabel=""
        onClose={() => setIsAddTopicOpen(false)}
        onSubmit={(nextLabel) => handleAddThoughtTopic(nextLabel)}
      />
      <DeleteThoughtModal
        open={deleteTopicId !== null}
        label={topics.find((topic) => topic.id === deleteTopicId)?.label ?? null}
        targetName="topic and all its items"
        onClose={() => setDeleteTopicId(null)}
        onConfirm={() => {
          if (deleteTopicId === null) return;
          return handleDeleteTopic(deleteTopicId);
        }}
      />
      <DeleteThoughtModal
        open={deleteItemId !== null}
        label={activeDeleteItem?.title ?? null}
        targetName="item"
        onClose={() => setDeleteItemId(null)}
        onConfirm={() => {
          if (deleteItemId === null) return;
          return handleDeleteThoughtItem(deleteItemId);
        }}
      />
    </>
  );
}
