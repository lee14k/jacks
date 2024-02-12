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
        <div className="grid grid-cols-3 my-16">
            {media.map(item => (
                <div key={item.id}>
                    <img src={item.media_url} alt={item.caption || 'Instagram post'} />
                </div>
            ))}
        </div>
    );
}

export default InstaGrid 