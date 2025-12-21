import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { NewThoughtItem, ThoughtTopic } from "../helper/data";

type AddThoughtItemModalProps = {
  open: boolean;
  topics: ThoughtTopic[];
  initialTopicId: number | null;
  onClose: () => void;
  onSubmit: (item: NewThoughtItem) => Promise<void> | void;
};

type FormState = {
  topicId: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
  images: string;
};

const defaultFormState: FormState = {
  topicId: "",
  title: "",
  subtitle: "",
  date: "",
  content: "",
  images: "",
};

export default function AddThoughtItemModal({
  open,
  topics,
  initialTopicId,
  onClose,
  onSubmit,
}: AddThoughtItemModalProps) {
  const [formState, setFormState] = useState<FormState>(defaultFormState);

  useEffect(() => {
    if (!open) return;
    setFormState((prev) => ({
      ...prev,
      topicId: initialTopicId ? String(initialTopicId) : topics[0]?.id ? String(topics[0].id) : "",
    }));
  }, [open, initialTopicId, topics]);

  if (!open) return null;

  const handleChange = (field: keyof FormState) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formState.topicId) return;

    const images = formState.images
      .split(",")
      .map((image) => image.trim())
      .filter(Boolean);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-950/30 p-4">
      <div className="w-full max-w-xl rounded-2xl border border-sky-100 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-sky-900">Add Thought Item</h3>
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
              Images (comma separated)
            </span>
            <input
              type="text"
              value={formState.images}
              onChange={handleChange("images")}
              className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
            />
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
              className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
            >
              Save Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
