export default async function handler(req, res) {
    try {
        const fields = 'id,media_type,media_url,caption';
        const accessToken = process.env.INSTAGRAM_TOKEN;
        // Start with a higher limit to account for non-image types
        const initialLimit = 20; // Adjust this number as needed
        const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${initialLimit}&access_token=${accessToken}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            return res.status(500).json({ error: data.error });
        }

        // Filter out any data that is not an image
        let imageData = data.data.filter(item => item.media_type === 'IMAGE');

        // Ensure only the first 9 images are returned
        imageData = imageData.slice(0, 9);

        res.status(200).json(imageData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Instagram media' });
    }
}
