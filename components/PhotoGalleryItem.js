import { useState } from "react";

export default function PhotoGalleryItem({
  imageSrc,
  title,
  description,
  onClick
}) {

const [isOpen, setIsOpen] = useState(false);
const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <div className="flex-shrink-0 w-64 mr-6">
      {/* Image */}
      <div
        className="rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition-transform"
        onClick={onClick} // <-- pass click handler from parent
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dropdown Description */}
        <div
            className={`overflow-hidden transition-all duration-700 ${
            isDescriptionOpen ? "max-h-40 mt-2" : "max-h-0"
            }`}
            >
            <div className="p-3 bg-white rounded-xl shadow-inner text-gray-700 text-sm">
                <h3 className="font-semibold mb-1">{title}</h3>
                <p>{description}</p>
            </div>
        </div>


        <div className="flex justify-center mt-3">
            <button
                onClick={() => setDescriptionOpen(!isDescriptionOpen)}
                className="px-4 py-2 text-sm font-medium text-gray-800 
                        bg-white/70 backdrop-blur-md rounded-xl 
                        shadow-md hover:shadow-lg hover:scale-105 
                        transition-all duration-300"
            >
                {isDescriptionOpen ? "Collapse" : title}
            </button>
        </div>
    </div>
  );
}
