import { Scale, Handshake, Users } from "lucide-react";

export default function Values() {
  const values = [
    { icon: <Scale className="w-10 h-10 text-sky-600" />, label: "Honesty" },
    { icon: <Handshake className="w-10 h-10 text-sky-600" />, label: "Gratitude" },
    { icon: <Users className="w-10 h-10 text-sky-600" />, label: "Teamwork" },
  ];

  return (
    <section className="py-10 bg-neutral-50 rounded-2xl">
      <h2 className="text-3xl font-semibold text-center mb-10 text-sky-900">
        My Values
      </h2>
      <div className="flex justify-center gap-10">
        {values.map((value) => (
          <div
            key={value.label}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-sky-200 shadow-md bg-white">
              {value.icon}
            </div>
            <p className="mt-4 text-lg font-medium text-sky-900">
              {value.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
