import React, { use, useMemo, useState } from "react";
import clsx from "clsx";
import ImageCarousel from "../components/ImageCarousel";

import personalJourney from "../assets/content/personal-journey.json";
/**
 * PersonalJourneyPage
 * - SPA-friendly page for a personal portfolio
 * - Left: vertical topic list (buttons)
 * - Right: grid of "button boxes" for the selected topic
 * - Clicking a box toggles a collapsible content panel directly beneath it
 *
 * Styling: TailwindCSS
 */
export default function PersonalJourneyPage() {
  // ---- Data model ---------------------------------------------------------
  // Edit/extend freely. Each topic has a unique `key`, a display `label`,
  // and a list of `items`, where each item has an `id`, `title`, and `content`.


  const topics = personalJourney;

  // Currently selected topic
  const [selectedKey, setSelectedKey] = useState(topics[0].key);

  // Track expanded items per topic (so switching topics remembers open panels)
  const [expandedByTopic, setExpandedByTopic] = useState<Record<string, Set<string>>>(
    () => Object.fromEntries(topics.map((t) => [t.key, new Set()]))
  );

  const selectedTopic = useMemo(
    () => topics.find((t) => t.key === selectedKey)!,
    [selectedKey, topics]
  );

  const toggleItem = (topicKey: string, id: string) => {
    setExpandedByTopic((prev) => {
      const copy: Record<string, Set<string>> = Object.fromEntries(
        Object.entries(prev).map(([k, v]) => [k, new Set(v)])
      );
      const set = copy[topicKey] ?? new Set<string>();
      if (set.has(id)) set.delete(id);
      else set.add(id);
      copy[topicKey] = set;
      return copy;
    });
  };

  const isExpanded = (topicKey: string, id: string) =>
    expandedByTopic[topicKey]?.has(id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Page container */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Title */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 tracking-tight">
            My Personal Journey
          </h1>
          <div className="mt-2 h-1 w-36 rounded-full bg-sky-300" />
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[400px_1fr]">
          {/* Left: Topics */}
          <aside className="lg:sticky lg:top-6 self-start">
            <nav className="space-y-2">
              {topics.map((topic) => {
                const active = topic.key === selectedKey;
                return (
                  <button
                    key={topic.key}
                    onClick={() => setSelectedKey(topic.key)}
                    className={clsx(
                      "w-full text-left rounded-xl border-2 px-4 py-3 transition-all font-burmese",
                      active
                        ? "bg-white border-sky-400 shadow-md text-sky-900"
                        : "bg-white/70 border-sky-200 hover:bg-sky-50 text-sky-800",
                )}
                    aria-pressed={active}
                  >
                    <span className="mr-2" aria-hidden>
                      {topic.icon}
                    </span>
                    <span className="font-semibold">{topic.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right: Item boxes for selected topic */}
          <main>
            <h2 className="sr-only">{selectedTopic.label}</h2>

            <div className="grid gap-4 grid-cols-1">
              {selectedTopic.items.map((item) => {
                const open = isExpanded(selectedTopic.key, item.id);
                return (
                  <div key={item.id} className="rounded-2xl border-2 border-sky-200 bg-white p-0">
                    {/* Button box */}
                    <button
                      onClick={() => toggleItem(selectedTopic.key, item.id)}
                      className="group w-full rounded-2xl p-5 text-left transition-all hover:bg-sky-50"
                      aria-expanded={open}
                      aria-controls={`${item.id}-panel`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-lg font-semibold text-sky-900">
                            {item.title}
                          </div>
                          <p className="mt-1 text-sm text-sky-600">Learn More</p>
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
  );
}
function loadContent(arg0: string) {
    throw new Error("Function not implemented.");
}

