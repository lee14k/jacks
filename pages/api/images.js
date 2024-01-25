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

        res.status(200).json(data.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Instagram media' });
    }
}
