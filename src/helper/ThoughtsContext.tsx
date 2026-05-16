import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fetchThoughtTopics, type ThoughtTopic } from "./data";

type ThoughtsContextValue = {
  topics: ThoughtTopic[];
  setTopics: React.Dispatch<React.SetStateAction<ThoughtTopic[]>>;
  loading: boolean;
};

const ThoughtsContext = createContext<ThoughtsContextValue | null>(null);

export function ThoughtsProvider({ children }: { children: ReactNode }) {
  const [topics, setTopics] = useState<ThoughtTopic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const data = await fetchThoughtTopics();
      if (cancelled) return;
      const sorted = [...data].sort((a, b) => a.id - b.id);
      setTopics(sorted);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <ThoughtsContext.Provider value={{ topics, setTopics, loading }}>
      {children}
    </ThoughtsContext.Provider>
  );
}

export function useThoughts() {
  const ctx = useContext(ThoughtsContext);
  if (!ctx) throw new Error("useThoughts must be used inside <ThoughtsProvider>");
  return ctx;
}
