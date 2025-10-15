import React, { useState } from "react";

export default function DropdownDescription({
    title,
    description,
    button,
    isOpen,
    setIsOpen,
    showExtendCollapseButton=true,
    wrapperClassName = "",      // Outer wrapper
    contentClassName = "",      // Dropdown content
}) {

  return (
    <div className="w-full">
        
        {/** CONTENT of description module */}
        <div
           className={`flex justify-center mt-3 overflow-hidden transition-all duration-700 ease-in-out ${
            isOpen ? "max-h-40 opacity-100 mt-2 mb-2" : "max-h-0 opacity-0"
            } ${contentClassName}`}
            >
            <div className="p-3 bg-white rounded-xl shadow-inner text-gray-700 text-sm text-center">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p>{description}</p>
            </div>
      </div>

        {/** BUTTON to trigger dropdown description module */}
        {showExtendCollapseButton ? (
            <div className={`flex justify-center ${wrapperClassName}`}>
                {button ? (
                        React.cloneElement(button, {
                            onClick: (e) => {
                            e.stopPropagation();
                            setIsOpen(!isOpen);
                            if (button.props.onClick) button.props.onClick(e); // preserve original onClick
                        },
                        })
                    ) : (
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="px-4 py-2 text-sm font-medium text-gray-800 
                                    bg-white/60 backdrop-blur-md rounded-xl 
                                    shadow-md hover:shadow-lg hover:scale-105 
                                    transition-all duration-300"
                        >
                            {isOpen ? "Collapse" : title}
                        </button>
                    )}
            </div>
        ): null}
      
    </div>
  );
}
