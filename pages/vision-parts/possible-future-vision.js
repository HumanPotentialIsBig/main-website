import Layout from '../../components/Layout'
import Head from 'next/head'
import PhotoGalleryItem from "../../components/PhotoGalleryItem";
import { useState, useEffect  } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";


const galleryImages = [
    {
        id: 1,
        src: "/images/forest-city/zukunftsvorstellung.jpeg",
        title: "Cultural Space",
        description:
        "Imagine vertical gardens climbing high-rise towers, blending nature with urban living.",
        order: 1,
    },
    {
        id: 2,
        src: "/images/forest-city/semi-realisitic sophisticated forest city.jpeg",
        title: "Commercial Space",
        description:
        "Elevated walkways wind through trees, connecting neighborhoods while keeping the forest intact.",
        order: 2,
    },
    {
        id: 3,
        src: "/images/forest-city/forest city in contrast with normal city.jpeg",
        title: "Today + Tomorrow: Integrated",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 3,
    },
    {
        id: 4,
        src: "/images/forest-city/forest city lively market.jpeg",
        title: "Market Place",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 6,
    },
    {
        id: 5,
        src: "/images/forest-city/housing in forest city.jpeg",
        title: "Living Space",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 7,
    },
    {
        id: 6,
        src: "/images/forest-city/forest city with normal cities in the background.jpeg",
        title: "Big Picture: Interconnected Cities",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 10,
    },
    {
        id: 7,
        src: "/images/forest-city/multi-level forest city.jpeg",
        title: "Multi-Level Structure",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 4,
    },
    {
        id: 8,
        src: "/images/forest-city/forest city hub-structure.jpeg",
        title: "Hub Structure",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 5,
    },
    {
        id: 9,
        src: "/images/forest-city/forest city many people.jpeg",
        title: "Touristic Space",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 9,
    },
    {
        id: 10,
        src: "/images/forest-city/lively park space.jpeg",
        title: "Social Park Space",
        description:
        "Clean waterways flow through the city, creating serene landscapes and sustainable transport.",
        order: 8,
    },
];

export default function PossibleFutureVisionPage() {

    const sortedImages = galleryImages.slice().sort((a, b) => a.order - b.order);

    const [modalIndex, setModalIndex] = useState(null); // null = modal closed
    const [isCaptionOpen, setCaptionOpen] = useState(false); // caption collapsed by default

    const openModal = (index) => {
        setModalIndex(index);
        setCaptionOpen(false); // reset caption state when opening
    };

    const closeModal = () => setModalIndex(null);

    const prevImage = () => {
        setModalIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev - 1));
        setCaptionOpen(false);
    };

    const nextImage = () => {
        setModalIndex((prev) => (prev === sortedImages.length - 1 ? 0 : prev + 1));
        setCaptionOpen(false);
    };


    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e) => {
        if (modalIndex !== null) {
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "Escape") closeModal();
        }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [modalIndex]);


    return(
        <Layout>
            <Head>
                <title>Vision | Human Potential Is Big</title>
            </Head>

            <h1 className="text-5xl font-bold mb-2 text-center">
                Vision: Forest-City
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-center text-gray-800">
                Humans and nature co-existing peacefully: <span className='italic'>»This could be us.«</span><br></br> A sophisticated vision of human societies living in synergy with nature.
            </p>

            {/** "flex overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" */}
            {/* Horizontal scroll container */}
            <div className="flex flex-wrap content-start gap-4 overflow-x-auto pb-6 gallery-scroll">
                {sortedImages.map((img, idx) => (
                    <PhotoGalleryItem
                        key={idx}
                        imageSrc={img.src}
                        title={img.title}
                        description={img.description}
                        onClick={() => openModal(idx)} // open modal
                    />
                ))}
            </div>

            {/* Modal */}
            {modalIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    {/* Left/Right Arrows */}
                        <button
                            className="absolute left-2 md:left-14 text-white text-7xl top-1/2 -translate-y-1/2 font-bold"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            ‹
                        </button>
                        <button
                            className="absolute right-2 md:right-14 text-white text-7xl top-1/2 -translate-y-1/2 font-bold"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            ›
                        </button>
                    
                    <SwitchTransition>
                        <CSSTransition
                        key={sortedImages[modalIndex].id}
                        timeout={500}
                        classNames="fade"
                        >
                        {/* Image */}
                            <img
                                src={sortedImages[modalIndex].src}
                                alt={sortedImages[modalIndex].title}
                                className="max-h-[70%] max-w-[90%] rounded-2xl shadow-lg mb-4 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCaptionOpen(!isCaptionOpen);
                                }}
                            />
                        </CSSTransition>
                    </SwitchTransition>

                    {/* Optional Expand Button */}
                    <button
                        className="mb-2 text-white underline"
                        onClick={(e) => {
                            e.stopPropagation();
                            setCaptionOpen(!isCaptionOpen);
                        }}
                    >
                        {isCaptionOpen ? "Collapse" : sortedImages[modalIndex].title}
                    </button>

                    {/* Caption */}
                    <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                            isCaptionOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-white bg-opacity-90 rounded-xl p-4 max-w-3xl text-center shadow-inner text-gray-800">
                            <h3 className="text-2xl font-semibold mb-2">
                                {sortedImages[modalIndex].title}
                            </h3>
                            <p>
                                {sortedImages[modalIndex].description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}
