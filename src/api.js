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
    animeRecommendations: async (preview) => {
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

            if (preview)
                return animeData.slice(0, 8)
            else
                return animeData
        } catch (error) {
            console.log(error);
        }
    },
    animeTrending: async (preview) => {
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

            if (preview)
                return animeData.slice(0, 8)
            else
                return animeData
        } catch (error) {
            console.log(error);
        }
    },
    animeMostPopular: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/top/anime?filter=bypopularity`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title,
                images: result.images.jpg,
                synopsis: result.synopsis
            }));

            if (preview)
                return animeData.slice(0, 8)
            else
                return animeData
        } catch (error) {
            console.log(error);
        }
    },
    animeCurrentSeason: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/seasons/now`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title,
                images: result.images.jpg,
                synopsis: result.synopsis
            }));

            if (preview)
                return animeData.slice(0, 8)
            else
                return animeData
        } catch (error) {
            console.log(error);
        }
    },
    animeNextSeason: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/seasons/upcoming`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title,
                images: result.images.jpg,
                synopsis: result.synopsis
            }));

            if (preview)
                return animeData.slice(0, 8)
            else
                return animeData
        } catch (error) {
            console.log(error);
        }
    },
}

export default api;
