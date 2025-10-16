const apiKey = "2ce51c698818254729a18e9b2577b17d";
const baseURL = "https://api.themoviedb.org/3";

export async function fetchFromTMDB(endpoint) {
    try {
        const connector = endpoint.includes("?") ? "&" : "?";
        const url = `${baseURL}${endpoint}${connector}api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch from TMDb (status ${response.status})`);
        return await response.json();
    } catch (error) {
        console.error("TMDb Error:", error);
        return null;
    }
}
