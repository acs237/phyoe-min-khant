import React from "react";
import NavBar from "./NavBar";

export default function ContactMe() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "4af72d6b-efd9-4705-b325-77f3b095df19");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-sky-50 to-white px-4">
        <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-sky-100">
          <h2 className="text-3xl font-bold text-sky-900 mb-6 text-center">
            Contact Me
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name */}
            <div className="flex items-center space-x-4">
              <label
                htmlFor="name"
                className="w-24 text-right text-sky-800 font-medium"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="flex-1 border-2 border-sky-200 rounded-xl p-2 bg-white/70 focus:ring-2 focus:ring-sky-300 outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <label
                htmlFor="email"
                className="w-24 text-right text-sky-800 font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="flex-1 border-2 border-sky-200 rounded-xl p-2 bg-white/70 focus:ring-2 focus:ring-sky-300 outline-none"
              />
            </div>

            {/* Message */}
            <div className="flex items-start space-x-4">
              <label
                htmlFor="message"
                className="w-24 text-right text-sky-800 font-medium mt-2"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="flex-1 border-2 border-sky-200 rounded-xl p-2 bg-white/70 focus:ring-2 focus:ring-sky-300 outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-sky-600 text-white font-semibold rounded-xl shadow hover:bg-sky-700 transition"
              >
                Submit Form
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sky-800 font-medium">{result}</p>
        </div>
      </div>
    </>
  );
}
