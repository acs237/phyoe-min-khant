import { useMemo, useState, useEffect } from "react";
import NavBar from "../components/NavBar";

import AddThoughtItemModal from "../components/AddThoughtItemModal";
import DeleteThoughtTopicModal from "../components/DeleteThoughtTopicModal";
import EditThoughtTopicModal from "../components/EditThoughtTopicModal";
import { ThoughtsLeftCol } from "../components/ThoughtsLeftCol";
import {
  addThoughtItem,
  addThoughtTopic,
  deleteThoughtTopic,
  fetchThoughtTopics,
  type NewThoughtItem,
  type ThoughtTopic,
  updateThoughtTopic,
} from "../helper/data";
import { ThoughtsRightCol } from "../components/ThoughtsRightCol";
import { ThoughtsHeader } from "../components/ThoughtsHeader";


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
  // ---- Data model ---------------------------------------------------------
  // Edit/extend freely. Each topic has a unique `id`, a display `label`,
  // and a list of `items`, where each item has an `id`, `title`, and `content`.
  const [topics, setTopics] = useState<ThoughtTopic[]>([]);

  // Currently selected topic
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [editTopicId, setEditTopicId] = useState<number | null>(null);
  const [deleteTopicId, setDeleteTopicId] = useState<number | null>(null);

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
      const addedTopics = await fetchThoughtTopics();
      setTopics(addedTopics);
      setSelectedId((prev) => prev ?? addedTopics[0]?.id ?? null);
    };
    
    fetch();
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
            onAddTopic={handleAddThoughtTopic}
            onAddItem={() => setIsAddItemOpen(true)}
          />
        
          {/* Right: Item boxes for selected topic */}
          <ThoughtsRightCol
            selectedTopic={selectedTopic}
            isExpanded={isExpanded}
            toggleItem={toggleItem}
          />

        </div>
      </div>
      </div>
      <AddThoughtItemModal
        open={isAddItemOpen}
        topics={topics}
        initialTopicId={selectedId}
        onClose={() => setIsAddItemOpen(false)}
        onSubmit={handleAddThoughtItem}
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
      <DeleteThoughtTopicModal
        open={deleteTopicId !== null}
        topic={topics.find((topic) => topic.id === deleteTopicId) ?? null}
        onClose={() => setDeleteTopicId(null)}
        onConfirm={() => {
          if (deleteTopicId === null) return;
          return handleDeleteTopic(deleteTopicId);
        }}
      />
    </>
  );
}
