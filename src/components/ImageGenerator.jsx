import { useState } from 'react';

const ImageGenerator = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

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
                    <div key={image.id} className="masonry-item">
                        <img
                            src={image.urls.small}
                            alt={image.alt_description}
                            className="w-full h-auto object-cover rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGenerator;
