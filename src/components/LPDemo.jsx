import React, { useState } from 'react';
import D1 from '../assets/DEMO png/luxuryproject-in-sugam-morya-html-D1.png'
import D2 from '../assets/DEMO png/howrah-projects-L2-D2.png'
import D3 from '../assets/DEMO png/howrah-projects-L1-D3.png'
import D4 from '../assets/DEMO png/foreshore-new-launches-L4-D4.png'
import D5 from '../assets/DEMO png/aadvika-howrah-L1-html-D5.png'
import D6 from '../assets/DEMO png/kolkataprojects-emami-aastha-index-html-D6.png'
import WP1 from '../assets/DEMO png/dubairealestateexpo-WP1.png'
import WP2 from '../assets/DEMO png/new-arunkumarjaiswal-WP2.png'
import WP3 from '../assets/DEMO png/coachakj-WP3.png'
import WP4 from '../assets/DEMO png/soyawala-WP4.png'
import WP5 from '../assets/DEMO png/soyaji-WP5.png'
import WP6 from '../assets/DEMO png/srigolokdham-WP6.png'

const DemoCard = ({ name, websiteUrl, pdfUrl, imageSrc, onImageClick }) => {
    return (
        <div className="w-auto p-4 border-2 border-gray-300 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className='flex justify-between w-full'>
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-2">
                    Visit Website
                </a>
            </div>

            {imageSrc && (
                <div
                    className="w-full h-[80vh] border border-gray-200 rounded-md overflow-hidden mt-2 flex justify-center items-start overflow-y-auto cursor-pointer"
                    onClick={() => onImageClick(imageSrc)}
                >
                    <img
                        src={imageSrc}
                        alt={`${name} Screenshot`}
                        className="w-full object-contain"
                    />
                </div>
            )}
        </div>
    );
};

const LPDemo = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('all'); // New state for active tab

    const openImageModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const demos = [
        {
            name: 'Luxury Project L1',
            websiteUrl: 'https://luxuryproject.in/sugam_morya.html',
            imageSrc: D1,
            category: 'landing-page',
        },
        {
            name: 'Howrah Project L2',
            websiteUrl: 'https://howrah-projects.com/L2/',
            imageSrc: D2,
            category: 'landing-page',
        },
        {
            name: 'Howrah Project L1',
            websiteUrl: 'https://howrah-projects.com/L1/',
            imageSrc: D3,
            category: 'landing-page',
        },
        {
            name: 'foreshore-new-launches L4',
            websiteUrl: 'https://foreshore-new-launches.com/L4/',
            imageSrc: D4,
            category: 'landing-page',
        },
        {
            name: 'Aadvika Howrah L5',
            websiteUrl: 'https://aadvika-howrah.com/L1.html',
            imageSrc: D5,
            category: 'landing-page',
        },
        {
            name: 'LP with Slide open ',
            websiteUrl: 'https://kolkataprojects.com/emami_aastha/index.html',
            imageSrc: D6,
            category: 'landing-page',
        },
        {
            name: 'Dubairealestatexpo',
            websiteUrl: 'https://www.dubairealestateexpo.com/',
            imageSrc: WP1,
            category: 'website',
        },
        {
            name: 'arunkumarjaiswal',
            websiteUrl: 'https://new.arunkumarjaiswal.com/',
            imageSrc: WP2,
            category: 'website',
        },
        {
            name: 'Coachakj',
            websiteUrl: 'https://coachakj.com/',
            imageSrc: WP3,
            category: 'website',
        }, {
            name: 'soyawala',
            websiteUrl: 'https://soyawala.com/',
            imageSrc: WP4,
            category: 'website',
        },
        {
            name: 'soyaji',
            websiteUrl: 'https://soyaji.com/',
            imageSrc: WP5,
            category: 'website',
        },
        {
            name: 'srigolokdham',
            websiteUrl: 'https://srigolokdham.com/',
            imageSrc: WP6,
            category: 'website',
        },
    ];

    // Filter demos based on activeTab
    const filteredDemos = demos.filter(demo => {
        if (activeTab === 'all') {
            return true;
        }
        return demo.category === activeTab;
    });

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">LP Demos</h2>

            {/* Tabs for filtering demos */}
            <div className="flex justify-center gap-4 mb-8">
                <button
                    className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('all')}
                >
                    All Demos
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${activeTab === 'landing-page' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('landing-page')}
                >
                    Landing Pages
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${activeTab === 'website' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('website')}
                >
                    Websites
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {filteredDemos.map((demo, index) => (
                    <DemoCard key={index} {...demo} onImageClick={openImageModal} />
                ))}
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={closeImageModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-3xl font-bold bg-red-500 hover:bg-red-700 w-10 h-10 rounded-full flex items-center justify-center"
                        onClick={closeImageModal}
                    >
                        &times;
                    </button>
                    <div
                        className="w-screen max-h-screen overflow-auto flex justify-center items-start"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the content itself
                    >
                        <img
                            src={selectedImage}
                            alt="Full Screen Demo"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default LPDemo;
