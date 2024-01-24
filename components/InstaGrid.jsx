import React, { useState, useEffect } from 'react';

const InstaGrid = ({ userId }) => {
  const [media, setMedia] = useState([]);
  const mediaId = '1491227324780855'
  let accessToken= process.env.TOKEN
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const fields = 'id,media_type,media_url,caption';
        const url = `https://graph.instagram.com/${mediaId}/media?fields=${fields}&access_token=${accessToken}`;
        const response = await fetch(url);
        const data = await response.json();
        setMedia(data.data); // Assuming the data is in the 'data' field
      } catch (error) {
        console.error('Error fetching Instagram media:', error);
      }
    };

    fetchMedia();
  }, [userId, accessToken]);

  if (media.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {media.map(item => (
        <div key={item.id}>
          <img src={item.media_url} alt={item.caption} />
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstaGrid