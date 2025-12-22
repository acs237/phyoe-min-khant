import { useState, type FormEvent } from "react";
import NavBar from "../components/NavBar";
import { signInWithEmail, signUpNewUser } from "../helper/auth";
import { useNavigate } from "react-router-dom";

type AuthMode = "signin" | "signup";

export default function AdminPage() {
  const [mode, setMode] = useState<AuthMode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);
    setError(null);

    if (mode === "signup") {
      const { error: signUpError } = await signUpNewUser(email, password);

      if (signUpError) {
        setError(signUpError.message);
      } else {
        setMessage("Check your email to confirm your account.");
      }
      setIsLoading(false);
      return;
    }

    const { error: signInError } = await signInWithEmail(email, password);

    if (signInError) {
      setError(signInError.message);
    } else {
      setMessage("Signed in successfully.");
      navigate('/');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <NavBar />

      <div className="mx-auto flex max-w-lg justify-center px-4 py-12">
        <div className="w-full rounded-2xl border-2 border-sky-200 bg-white/80 p-6 shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-sky-900 tracking-tight">
              Admin
            </h1>
            <p className="mt-2 text-sm text-sky-700">
              {mode === "signin"
                ? "Sign in to manage your content."
                : "Create an account to access admin tools."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-sky-800">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-sky-800">Password</span>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-lg border border-sky-200 px-3 py-2 text-sm text-sky-900"
              />
            </label>

            {error && (
              <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
                {error}
              </p>
            )}

            {message && (
              <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-600">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading
                ? "Please wait..."
                : mode === "signin"
                ? "Sign In"
                : "Sign Up"}
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center text-sm text-sky-700">
            <span>
              {mode === "signin"
                ? "New here?"
                : "Already have an account?"}
            </span>
            <button
              type="button"
              onClick={() =>
                setMode((prev) => (prev === "signin" ? "signup" : "signin"))
              }
              className="ml-2 font-semibold text-sky-800 hover:text-sky-900"
            >
              {mode === "signin" ? "Create one" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
