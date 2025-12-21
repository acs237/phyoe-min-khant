import type { ThoughtTopic } from "../helper/data";
import clsx from "clsx";
import { EditDeleteDropDown } from "./EditDeleteDropDown";

type ThoughtsLeftColProps = {
  topics: ThoughtTopic[];
  selectedId: number | null;
  openMenuId: number | null;
  setSelectedId: (id: number) => void;
  setOpenMenuId: (id: number | null) => void;
  setEditTopicId: (id: number) => void;
  setDeleteTopicId: (id: number) => void;
  onAddTopic: (label: string) => void;
  onAddItem: () => void;
};

export const ThoughtsLeftCol = ({
  topics,
  selectedId,
  openMenuId,
  setSelectedId,
  setOpenMenuId,
  setEditTopicId,
  setDeleteTopicId,
  onAddTopic,
  onAddItem,
}: ThoughtsLeftColProps) => {
  return (
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
                  setOpenMenuId(openMenuId === topic.id ? null : topic.id);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-sky-600 hover:bg-sky-100"
                aria-haspopup="menu"
                aria-expanded={openMenuId === topic.id}
                aria-label="Open topic menu"
              >
                ⋮
              </button>
              {openMenuId === topic.id && (
                <EditDeleteDropDown
                  topicId={topic.id}
                  setEditId={setEditTopicId}
                  setDeleteId={setDeleteTopicId}
                  setOpenId={setOpenMenuId}
                />
              )}
            </div>
          );
        })}
        <div className="flex justify-center">
          <button
            onClick={() => onAddTopic("New Topic")}
            className="inline-flex items-center justify-center rounded-xl border-2 border-sky-200 px-3 py-2 text-sky-900 transition-all hover:bg-sky-200 font-burmese"
          >
            <span className="text-sky-900 tracking-tight font-semibold">Add Topic</span>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onAddItem}
            className="inline-flex items-center justify-center rounded-xl border-2 border-sky-200 px-3 py-2 text-sky-900 transition-all hover:bg-sky-200 font-burmese"
          >
            <span className="text-sky-900 tracking-tight font-semibold">Add A Post</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};
