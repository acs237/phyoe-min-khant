import type { ThoughtTopic } from "../helper/data";

type DeleteThoughtTopicModalProps = {
  open: boolean;
  topic: ThoughtTopic | null;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
};

export default function DeleteThoughtTopicModal({
  open,
  topic,
  onClose,
  onConfirm,
}: DeleteThoughtTopicModalProps) {
  if (!open || !topic) return null;

  const handleConfirm = async () => {
    await onConfirm();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-950/30 p-4">
      <div className="w-full max-w-md rounded-2xl border border-sky-100 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-sky-900">Delete Topic</h3>
          <button
            onClick={onClose}
            className="rounded-full border border-sky-200 px-2 py-1 text-sm text-sky-700 hover:bg-sky-50"
            aria-label="Close delete topic modal"
          >
            ✕
          </button>
        </div>

        <p className="mt-3 text-sm text-sky-700">
          Delete <span className="font-semibold">{topic.label}</span> and all its items?
        </p>

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-700 hover:bg-sky-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
