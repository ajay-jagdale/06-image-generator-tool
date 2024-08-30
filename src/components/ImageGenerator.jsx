import { useState } from 'react';

const ImageGenerator = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const fetchImages = async () => {
        try {
            const response = await fetch(
                `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
            );
            const data = await response.json();
            setImages(data.results);
        } catch (error) {
            console.error("Error fetching images from Unsplash:", error);
        }
    };

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="p-4 max-w-5xl mx-auto mt-[70px] mb-36">
            <div className="flex flex-row gap-2">
                <input
                    type="text"
                    id="default-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Search for images"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    onClick={fetchImages}
                    className="p-4 rounded flex items-center justify-center h-12"
                >
                    <i className="bi bi-arrow-right-circle-fill text-3xl" style={{ color: '#1e40af' }}></i>
                </button>
            </div>
            <div className="masonry mt-4">
                {images.map((image) => (
                    <div key={image.id} className="masonry-item" onClick={() => openModal(image)}>
                        <img
                            src={image.urls.small}
                            alt={image.alt_description}
                            className="w-full h-auto object-cover rounded cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div id="default-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative p-4 w-full max-w-2xl max-h-[90vh]">
                        <div
                            className="relative rounded-lg shadow dark:bg-gray-700 overflow-hidden"
                            style={{ backgroundColor: '#ffffff' }}
                        >
                            {/* Modal body */}
                            <div className="p-4 md:p-5 space-y-4">
                                <div className="flex justify-end">
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="flex justify-center items-center">
                                    <img
                                        src={selectedImage.urls.regular}
                                        alt={selectedImage.alt_description}
                                        className="w-full h-auto max-h-[75vh] object-contain rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGenerator;
