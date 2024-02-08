export default async function handler(req, res) {
    try {
        const fields = 'id,media_type,media_url,caption';
        const accessToken = process.env.INSTAGRAM_TOKEN;
        const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${accessToken}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            return res.status(500).json({ error: data.error });
        }

        // Filter out any data that is not an image
        const imageData = data.data.filter(item => item.media_type === 'IMAGE');

        // Return only the filtered images
        res.status(200).json(imageData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Instagram media' });
    }
}
