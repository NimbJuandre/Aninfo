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
    },
    animeRecommendations: async () => {
        try {
            const response = await fetch(`${BASE_URL}/recommendations/anime`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title,
                images: result.images.jpg,
                synopsis: result.synopsis
            }));

            console.log(animeData)
            return animeData;
        } catch (error) {
            console.log(error);
        }
    },
    animeTrending: async () => {
        try {
            const response = await fetch(`${BASE_URL}/top/anime?filter=airing`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title,
                images: result.images.jpg,
                synopsis: result.synopsis
            }));

            console.log(animeData)
            return animeData;
        } catch (error) {
            console.log(error);
        }
    },
}

export default api;
