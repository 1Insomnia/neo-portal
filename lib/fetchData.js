const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchData = async endpoint => {
    const baseURL = `https://api.nasa.gov/neo/rest/v1`;
    try {
        const response = await fetch(`${baseURL}${endpoint}api_key=${API_KEY}`);
        if (!response.ok) throw new Error();
        const data = await response.json();
        return {
            data: data,
            error: null,
        };
    } catch (error) {
        return {
            data: [],
            error: error.stack,
        };
    }
};

export const fetchFeed = async params => {
    const { data, error } = await fetchData(`/feed?${params}&`);
    return {
        data: data,
        error: error,
    };
};

export const fetchLookup = async params => {
    const { data, error } = await fetchData(`/neo?${params}&`);
    return {
        data: data,
        error: error,
    };
};

export const fetchBrowse = async pageNumber => {
    const { data, error } = await fetchData(`/neo/browse?page=${pageNumber}&`);
    return {
        data: data,
        error: error,
    };
};

export default fetchData;
