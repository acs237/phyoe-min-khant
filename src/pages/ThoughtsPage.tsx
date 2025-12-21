import { useMemo, useState, useEffect } from "react";
import clsx from "clsx";
import ImageCarousel from "../components/ImageCarousel";
import NavBar from "../components/NavBar";

import AddThoughtItemModal from "../components/AddThoughtItemModal";
import DeleteThoughtTopicModal from "../components/DeleteThoughtTopicModal";
import EditThoughtTopicModal from "../components/EditThoughtTopicModal";
import {
  addThoughtItem,
  addThoughtTopic,
  deleteThoughtTopic,
  fetchThoughtTopics,
  type NewThoughtItem,
  type ThoughtTopic,
  updateThoughtTopic,
} from "../helper/data";


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
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 tracking-tight">
            My Thoughts
          </h1>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">
          {/* Left: Topics */}
          <aside className="lg:sticky lg:top-6 self-start">
            <nav className="space-y-2">
              {topics.map((topic) => {
                const active = topic.id === selectedId;
                return (
                  <div key={topic.id} className="relative">
                    <button
                      onClick={() => {
                        setSelectedId(topic.id);
                        setOpenMenuId(null);
                      }}
                      className={clsx(
                        "w-full text-left rounded-xl border-2 px-4 py-3 pr-10 transition-all font-burmese",
                        active
                          ? "bg-white border-sky-400 shadow-md text-sky-900"
                          : "bg-white/70 border-sky-200 hover:bg-sky-50 text-sky-800",
                      )}
                      aria-pressed={active}
                    >
                      <span className="font-semibold">{topic.label}</span>
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setOpenMenuId((prev) => (prev === topic.id ? null : topic.id));
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-sky-600 hover:bg-sky-100"
                      aria-haspopup="menu"
                      aria-expanded={openMenuId === topic.id}
                      aria-label="Open topic menu"
                    >
                      ⋮
                    </button>
                    {openMenuId === topic.id && (
                      <div
                        className="absolute right-3 mt-2 z-20 w-28 rounded-lg border border-sky-100 bg-white py-1 text-sm shadow-lg"
                        role="menu"
                      >
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setEditTopicId(topic.id);
                            setOpenMenuId(null);
                          }}
                          className="block w-full px-3 py-2 text-left text-sky-700 hover:bg-sky-50"
                          role="menuitem"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setDeleteTopicId(topic.id);
                            setOpenMenuId(null);
                          }}
                          className="block w-full px-3 py-2 text-left text-rose-600 hover:bg-rose-50"
                          role="menuitem"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="flex justify-center">
                <button
                  onClick={() => handleAddThoughtTopic("New Topic")}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-sky-200 px-3 py-2 text-sky-900 transition-all hover:bg-sky-200 font-burmese"
                >
                  <span className="text-sky-900 tracking-tight font-semibold">Add Topic</span>
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsAddItemOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-sky-200 px-3 py-2 text-sky-900 transition-all hover:bg-sky-200 font-burmese"
                >
                  <span className="text-sky-900 tracking-tight font-semibold">Add A Post</span>
                </button>
              </div>
              
            </nav>
          </aside>

          {/* Right: Item boxes for selected topic */}
          <main>
            <h2 className="sr-only">{selectedTopic?.label ?? "Thoughts"}</h2>

            <div className="grid gap-4 grid-cols-1">
              {(selectedTopic?.items ?? []).map((item) => {
                const open = selectedTopic ? isExpanded(selectedTopic.id, item.id) : false;
                return (
                  <div key={item.id} className="rounded-2xl border-2 border-sky-200 bg-white p-0">
                    {/* Button box */}
                    <button
                      onClick={() => selectedTopic && toggleItem(selectedTopic.id, item.id)}
                      className="group w-full rounded-2xl p-5 text-left transition-all hover:bg-sky-50"
                      aria-expanded={open}
                      aria-controls={`${item.id}-panel`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                            <div className="text-lg font-semibold text-sky-900">
                              {item.title}
                            </div>
                            <div className="text-lg font-semibold text-sky-900">
                              {item.subtitle}
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-sky-600">{item.date}</p>
                        </div>
                                            
                        
                        <span
                          className={clsx(
                            "mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border",
                            open
                              ? "rotate-45 border-sky-400 text-sky-600"
                              : "border-sky-200 text-sky-500",
                            "transition-transform",
                          )}
                          aria-hidden
                        >
                          +
                        </span>
                      </div>
                    </button>

                    {/* Collapsible content */}
                    {open && (
                      <div
                        id={`${item.id}-panel`}
                        style = {{ whiteSpace: "pre-line" }}
                        className="mx-5 mb-5 mt-0 overflow-hidden rounded-xl border border-sky-100 bg-sky-50/60 p-4 text-sky-800"
                      >
                        {item.content}
                        <ImageCarousel
                            images={item.images}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </main>
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
