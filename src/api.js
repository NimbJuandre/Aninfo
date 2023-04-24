const BASE_URL = 'https://api.jikan.moe/v4';

const api = {
    animeSearch: async (query) => {
        try {
            const response = await fetch(`${BASE_URL}/anime?q=${query}`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title,
                images: result.images.jpg,
                synopsis: result.synopsis
            }));

            return animeData;
        } catch (error) {
            console.log(error);
        }
    }
}

export default api;
