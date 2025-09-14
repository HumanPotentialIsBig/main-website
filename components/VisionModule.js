import Link from "next/link";
import { theme } from "../theme";

export default function VisionModule({ title, description, imageSrc, link, image_center }) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-2xl shadow-lg w-80  hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer overflow-hidden">
        <img src={imageSrc} alt="image_missing" className={`w-full h-52 object-cover ${image_center}`} />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}