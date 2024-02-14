import React, { useState, useEffect } from 'react';

const InstaGrid = () => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const response = await fetch('/api/images'); // Call to your Next.js API route
                const data = await response.json();

                if (!response.ok) {
                    console.error('API Error:', data.error);
                    return;
                }

                setMedia(data);
            } catch (error) {
                console.error('Error fetching Instagram media:', error);
            }
        };

        fetchMedia(); // Call the function to fetch media
    }, []); // Empty dependency array to run once on component mount

    if (!media || media.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 my-16 w-3/4 gap-4">
            {media.map(item => (
                // Update this div to use flex and center items
                <div key={item.id} className="flex justify-center items-center">
                    <img src={item.media_url} alt={item.caption || 'Instagram post'} className=" max-w-full h-auto"/>
                </div>
            ))}
        </div>
        </div>
    );
}

export default InstaGrid 