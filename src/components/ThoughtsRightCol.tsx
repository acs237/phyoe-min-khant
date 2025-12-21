import type { ThoughtTopic } from "../helper/data";
import clsx from "clsx";
import ImageCarousel from "../components/ImageCarousel";
import { EditDeleteDropDown } from "./EditDeleteDropDown";

type ThoughtsRightColProps = {
    selectedTopic: ThoughtTopic | null;
    isExpanded: (topicId: number, id: number) => boolean;
    toggleItem: (topicId: number, id: number) => void;
    openItemMenuId: number | null;
    setOpenItemMenuId: (id: number | null) => void;
    onEditItem: (id: number) => void;
    onDeleteItem: (id: number) => void;
}

export const ThoughtsRightCol = ({
    selectedTopic,
    isExpanded,
    toggleItem,
    openItemMenuId,
    setOpenItemMenuId,
    onEditItem,
    onDeleteItem,
}: ThoughtsRightColProps) => {
    return(
        <main>
            <h2 className="sr-only">{selectedTopic?.label ?? "Thoughts"}</h2>

            <div className="grid gap-4 grid-cols-1">
              {(selectedTopic?.items ?? []).map((item) => {
                const open = selectedTopic ? isExpanded(selectedTopic.id, item.id) : false;
                const menuOpen = openItemMenuId === item.id;
                return (
                  <div key={item.id} className="relative rounded-2xl border-2 border-sky-200 bg-white p-0">
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
                        <div className="relative flex items-center gap-2">
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
                          <span
                            role="button"
                            tabIndex={0}
                            onClick={(event) => {
                              event.stopPropagation();
                              setOpenItemMenuId(menuOpen ? null : item.id);
                            }}
                            onKeyDown={(event) => {
                              if (event.key !== "Enter" && event.key !== " ") return;
                              event.preventDefault();
                              setOpenItemMenuId(menuOpen ? null : item.id);
                            }}
                            className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 text-sky-600 hover:bg-sky-100"
                            aria-haspopup="menu"
                            aria-expanded={menuOpen}
                            aria-label="Open item menu"
                          >
                            ⋮
                          </span>
                        </div>
                      </div>
                    </button>
                    {menuOpen && (
                      <EditDeleteDropDown
                        topicId={item.id}
                        setEditId={onEditItem}
                        setDeleteId={onDeleteItem}
                        setOpenId={setOpenItemMenuId}
                      />
                    )}

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
    )
}
