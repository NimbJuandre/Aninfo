import store from './store'

const BASE_URL = 'https://api.jikan.moe/v4';

const api = {
    search: async (query) => {
        try {
            const response = await fetch(`${BASE_URL}/${store.getters.typeName}?q=${query}`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title_english || result.title,
                images: result.images.jpg,
                synopsis: result.synopsis
            }));

            return animeData;
        } catch (error) {
            console.log(error);
        }
    },
    getData: async (id) => {
        try {
            const dataResponse = await fetch(`${BASE_URL}/${store.getters.typeName}/${id}/full`);
            var data = (await dataResponse.json()).data;

            const picturesResponse = await fetch(`${BASE_URL}/${store.getters.typeName}/${id}/pictures`);
            data.pictures = (await picturesResponse.json()).data;

            debugger;
            
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    recommendations: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/recommendations/${store.getters.typeName}`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title_english || result.title,
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
    trending: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/top/${store.getters.typeName}?filter=airing`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title_english || result.title,
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
    mostPopular: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/top/${store.getters.typeName}?filter=bypopularity`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title_english || result.title,
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
    currentSeason: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/seasons/now`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title_english || result.title,
                images: result.images.jpg,
                synopsis: result.synopsis,
                type: result.type
            }));

            if (preview)
                return animeData.slice(0, 8)
            else
                return animeData
        } catch (error) {
            console.log(error);
        }
    },
    nextSeason: async (preview) => {
        try {
            const response = await fetch(`${BASE_URL}/seasons/upcoming`);
            const results = await response.json();

            if (!results)
                return;

            const animeData = results.data.map(result => ({
                id: result.mal_id,
                title: result.title_english || result.title,
                images: result.images.jpg,
                synopsis: result.synopsis,
                type: result.type
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
