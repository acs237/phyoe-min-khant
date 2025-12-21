import { useEffect, useState, type FormEvent } from "react";
import type { ThoughtTopic } from "../helper/data";

type EditThoughtTopicModalProps = {
  open: boolean;
  topic?: ThoughtTopic | null;
  initialLabel?: string;
  title?: string;
  submitLabel?: string;
  onClose: () => void;
  onSubmit: (nextLabel: string) => Promise<void> | void;
};

export default function EditThoughtTopicModal({
  open,
  topic = null,
  initialLabel = "",
  title = "Edit Topic",
  submitLabel = "Save",
  onClose,
  onSubmit,
}: EditThoughtTopicModalProps) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (!open) return;
    if (topic) {
      setLabel(topic.label);
      return;
    }
    setLabel(initialLabel);
  }, [open, topic, initialLabel]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!label.trim()) return;
    await onSubmit(label.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-950/30 p-4">
      <div className="w-full max-w-md rounded-2xl border border-sky-100 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-sky-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full border border-sky-200 px-2 py-1 text-sm text-sky-700 hover:bg-sky-50"
            aria-label="Close edit topic modal"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <label className="block">
            <input
              type="text"
              value={label}
              onChange={(event) => setLabel(event.target.value)}
              required
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
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
