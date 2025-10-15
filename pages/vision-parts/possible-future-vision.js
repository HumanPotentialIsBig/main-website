import Layout from '../../components/Layout'
import Head from 'next/head'
import PhotoGalleryItem from "../../components/PhotoGalleryItem";
import { useState, useEffect  } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import DropDownDescription from "../../components/DropDownDescription"
import { useSwipeable } from 'react-swipeable';
import { MagnifyingGlassIcon  } from "@heroicons/react/24/solid";

const galleryImages = [
    {
        id: 1,
        src: "/images/forest-city/zukunftsvorstellung.jpeg",
        title: "Educational Space",
        description:
        "Edcuation in the skies: Schools, Universities, Libraries, book stores, cafes, etc. Imagine your institution up there!",
        order: 5,
    },
    {
        id: 2,
        src: "/images/forest-city/semi-realisitic sophisticated forest city.jpeg",
        title: "Commercial Space",
        description:
        "Commercial spaces like shopping streets or malls are built around trees. Example 'Mariahilfer Straße' in Vienna.",
        order: 2,
    },
    {
        id: 3,
        src: "/images/forest-city/forest city in contrast with normal city.jpeg",
        title: "Today & Tomorrow: Integration",
        description:
        "Today's cities are interconnected with the city of tomorrow. Both exist with and next to each other.",
        order: 1,
    },
    {
        id: 4,
        src: "/images/forest-city/forest city lively market.jpeg",
        title: "Market Place",
        description:
        "A thriving social space where goods are traded and people come together.",
        order: 7,
    },
    {
        id: 5,
        src: "/images/forest-city/housing in forest city.jpeg",
        title: "Living Space",
        description:
        "This is how residential areas could look like.",
        order: 4,
    },
    {
        id: 6,
        src: "/images/forest-city/forest city with normal cities in the background.jpeg",
        title: "Big Picture: Interconnected Cities",
        description:
        "Forest-Cities are spread across Europe, and are connected by intelligent transport systems.",
        order: 10,
    },
    {
        id: 7,
        src: "/images/forest-city/multi-level forest city.jpeg",
        title: "Multi-Level Structure",
        description:
        "Using a system of multiple layers to enhance spatial efficiency by using less space for more use and reduce soil sealing.",
        order: 3,
    },
    {
        id: 8,
        src: "/images/forest-city/forest city hub-structure.jpeg",
        title: "Work Space",
        description:
        "Offices & companies can use the offices here.",
        order: 6,
    },
    {
        id: 9,
        src: "/images/forest-city/forest city many people.jpeg",
        title: "Touristic Space",
        description:
        "Tourists and interested people alike can explore and experience the amazing views you get here: A city in a forest!",
        order: 9,
    },
    {
        id: 10,
        src: "/images/forest-city/lively park space.jpeg",
        title: "Park Space",
        description:
        "A normal park, just how you know it: to meet, to play, to spend time with loved ones.",
        order: 8,
    },
];

export default function PossibleFutureVisionPage() {

    const sortedImages = galleryImages.slice().sort((a, b) => a.order - b.order);

    const [modalIndex, setModalIndex] = useState(null); // null = modal closed
    const [isCaptionOpen, setCaptionOpen] = useState(false); // caption collapsed by default
    const [isFirstOpen, setIsFirstOpen] = useState(true);

    const openModal = (index) => {
        setModalIndex(index);
        setCaptionOpen(false); // reset caption state when opening
        setIsFirstOpen(true);
    };

    const closeModal = () => setModalIndex(null);

    const prevImage = () => {
        setModalIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev - 1));
        setCaptionOpen(false);
        setIsFirstOpen(false);
    };

    const nextImage = () => {
        setModalIndex((prev) => (prev === sortedImages.length - 1 ? 0 : prev + 1));
        setCaptionOpen(false);
        setIsFirstOpen(false);
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


    const [isMobile, setIsMobile] = useState(false);
    //isMobile
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
        handleResize(); // set initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //Make it swipeable for mobile
    const handlers = useSwipeable({
        onSwipedLeft: () => nextImage(),
        onSwipedRight: () => prevImage(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // optional, allows mouse dragging too
        });

    //Pop Animation for Mobile
    const [popTrigger, setPopTrigger] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (isMobile && !initialLoad) {
            setPopTrigger(false);
            const timeout = setTimeout(() => setPopTrigger(false), 1000); // match animation duration
            return () => clearTimeout(timeout);
        }
        else{
            // first modal open: show image immediately
            setPopTrigger(false);
            setInitialLoad(false);
        }
    }, [modalIndex, isMobile]);

    return(
        <Layout>
            <Head>
                <title>Vision | Human Potential Is Big</title>
            </Head>

            <h1 className="text-5xl font-bold mb-2 text-center">
                Vision: A City in a Forest
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-center text-gray-800">
                A sophisticated vision of human societies living in synergy with nature.<br></br>
                Imagine living under gigantic trees but in a buzzing city at the same time.<br></br>No question of <span className='text-xl md:text-2xl'>"nature <span className='font-semibold'>or</span> city"</span> anymore.<br></br>Instead, the fusion of <br></br><span className='text-xl md:text-2xl bg-white rounded-lg bg-opacity-90 px-3 py-1 mt-2 mb-3'>"nature <span className='font-semibold'>and</span> city."</span><br></br>
                Humans and nature co-existing peacefully. It <span className='italic'>is</span> possible.
            </p>

            <div className="block md:hidden flex items-center justify-center text-sm text-gray-600 italic mx-auto text-center mb-2">
                <span>Tap on images to see more</span>
                <MagnifyingGlassIcon className="w-4 h-5 ml-1"/>
            </div>


            
            {/** "flex overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" */}
            {/* Horizontal scroll container */}
            <div className="flex flex-wrap justify-center gap-4 overflow-x-auto pb-6 gallery-scroll">
                {sortedImages.map((img, idx) => (
                    <div className='flex-shrink-0 w-fit mr-5 mt-2'>
                        <PhotoGalleryItem
                            key={idx}
                            imageSrc={img.src}
                            title={img.title}
                            description={img.description}
                            onClick={() => openModal(idx)} // open modal
                            showExtendCollapseButton={false}
                        />
                    </div>
                ))}
            </div>

            
            <div className="flex justify-center">
                <div className="inline-block p-4 rounded-2xl shadow bg-yellow-200 hover:shadow-lg transition text-center">
                    <span className='font-bold'>Version 2 Update coming soon!</span><br></br> I've got loads of ideas & improvements in mind! Most of them coming from active conversations & discussions with other people. Thank you!
                </div>
            </div>



            {/* Modal */}
            {modalIndex !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
                    onClick={closeModal}    
                >
                    {/* Left/Right Arrows */}
                        <button
                            className="hidden md:block absolute left-2 md:left-14 text-white text-7xl top-1/2 -translate-y-1/2 font-bold"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            ‹
                        </button>
                        <button
                            className="hidden md:block absolute right-2 md:right-14 text-white text-7xl top-1/2 -translate-y-1/2 font-bold"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            ›
                        </button>
                    

                    {/** Image container with swipe/pop/fade animation */}
                        {isMobile ? (
                            // Mobile: manual pop animation
                            <div className="w-full justify-evenly">
                                <div
                                    {...handlers}
                                    className={`cursor-pointer transition-transform duration-1000 ${
                                        popTrigger ? "scale-0" : "scale-100"
                                    }`}
                                >
                                    <img
                                        src={sortedImages[modalIndex].src}
                                        alt={sortedImages[modalIndex].title}
                                        className="max-h-[70vh] max-w-[90%] rounded-2xl shadow-lg mb-2 md:mb-0 cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCaptionOpen(!isCaptionOpen);
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            // Desktop: fade animation
                            <SwitchTransition>
                                <CSSTransition
                                    key={sortedImages[modalIndex].id}
                                    timeout={isFirstOpen ? 400 : 220} // smooth on open, snappy on swipe
                                    classNames={isFirstOpen ? "fade" : (isMobile ? "pop-enter-only" : "fade")}
                                >
                                    <div className="cursor-pointer">
                                        <img
                                            src={sortedImages[modalIndex].src}
                                            alt={sortedImages[modalIndex].title}
                                            className="max-h-[70vh] max-w-[90%] rounded-2xl shadow-lg mb-2 md:mb-0 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCaptionOpen(!isCaptionOpen);
                                            }}
                                        />
                                    </div>
                                </CSSTransition>
                            </SwitchTransition>
                        )}
                    
                    
                        <DropDownDescription 
                            title={sortedImages[modalIndex].title}
                            description={sortedImages[modalIndex].description}
                            isOpen={isCaptionOpen}
                            setIsOpen={setCaptionOpen}
                            wrapperClassName='mt-3'
                            button={
                                <button
                                    className="mb-2 text-white underline text-lg md:text-xl"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCaptionOpen(!isCaptionOpen);
                                    }}
                                >
                                    {isCaptionOpen ? "Collapse" : sortedImages[modalIndex].title}
                                </button>
                            }
                        />
                    </div>            
            )}
        </Layout>
    );
}
