import Link from "next/link";
import { theme } from "../theme";
import { ROUTES } from './Layout'

export default function VisionModule(
  { 
    title, 
    description, 
    imageSrc, 
    link, 
    buttonExists=false,
    buttonTitle=null,
    isClickable=false,
    image_center="object-center", 
    image_fit="object-cover",
    newTab = false,
  }) {
  
  const content = (
        <div className="bg-white rounded-2xl shadow-lg w-80 hover:shadow-lg transition-transform transform hover:scale-100 cursor-pointer overflow-hidden">
          <img src={imageSrc} alt="image_missing" className={`w-full h-52 ${image_fit} ${image_center}`} />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
            {buttonExists ? (
              <div className="mt-8">
                <Link href={link} className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-500">
                {buttonTitle}</Link>
              </div>
            ) : null }
          </div>
      </div>
    );

  return newTab ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
    ) : (
    <Link href={link}>{content}</Link>
    );
}