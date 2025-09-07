import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const correctPassword = "admin123"; // change this to your real password

  const handleLogin = () => {
    if (password === correctPassword) {
      setAuthenticated(true);
    } else {
      alert("Wrong password!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save logic here (e.g., API call or local storage)
    const newEntry = { topic, title, content };
    console.log("New Content:", newEntry);

    // redirect to home
    navigate("/");
  };

  if (!authenticated) {
    return (
      <div className="bg-gradient-to-br from-sky-100 to-whiteflex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl mb-4">Enter Admin Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded px-3 py-2 mb-2"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-sky-100 to-white p-6 max-w-lg mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold text-sky-900 mb-4 tracking-tight">Add New Content</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Topic selection */}
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="rounded-2xl border-2 border-sky-200 bg-white p-0"
          required
        >
          <option value="">Select a Topic</option>
          <option value="Education">🎓 Education</option>
          <option value="Projects">🧪 Projects</option>
          <option value="Experience">💼 Experience</option>
          <option value="Milestones">🏁 Milestones</option>
          <option value="Certifications">📜 Certifications & Exams</option>
        </select>

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-gradient-to-br from-sky-100 to-white p-6 mx-auto px-3 py-2"
          required
        />

        {/* Content */}
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded px-3 py-2"
          rows={4}
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
