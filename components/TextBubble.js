import Link from "next/link";

export default function TextBubble({ title, children }) {
  return (
      <div className="bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600">{children}</p>
        </div>
      </div>
  );
}
