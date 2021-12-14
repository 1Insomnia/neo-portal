const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchData = async endpoint => {
    const url = `https://api.nasa.gov/neo/rest/v1${endpoint}api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Could not fetch data');
        const data = await response.json();
        return {
            data: data,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error.message,
        };
    }
};

export const fetchFeed = async (startDate, endDate) => {
    const { data, error } = await fetchData(`/feed?start_date=${startDate}&end_date=${endDate}&`);
    return {
        data: data,
        error: error,
    };
};

export const fetchLookup = async id => {
    const { data, error } = await fetchData(`/neo/${id}?`);
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
