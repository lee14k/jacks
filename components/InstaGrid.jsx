import React, { useState, useEffect } from 'react';

const InstaGrid = () => {
  const [media, setMedia] = useState([]);
  // Access the access token from environment variables for security
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const fields = 'id,media_type,media_url,caption';
        // Replace 'USER_ID' with the actual user ID
        const url = `https://graph.instagram.com/4302296525/media?fields=${fields}&access_token=${accessToken}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
          console.error('API Error:', data.error);
          return;
        }

        setMedia(data.data);
      } catch (error) {
        console.error('Error fetching Instagram media:', error);
      }
    };

    fetchMedia();
  }, [accessToken]); // Dependency on accessToken to refetch if it changes

  if (!media || media.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {media.map(item => (
        <div key={item.id}>
          <img src={item.media_url} alt={item.caption || 'Instagram post'} />
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstaGrid;
