import { renderMovies } from "./display.mjs";
import { fetchFromTMDB } from "./utils.mjs"; //  API function is here

//  the container where movies will appear
const container = document.querySelector("#trendingGrid");

export async function loadTrending() {
  try {
    const data = await fetchFromTMDB("/trending/movie/week");

    //  checking if data exists before rendering
    if (data && data.results) {
      renderMovies(data.results, container);
    } else {
      container.innerHTML = "<p>Failed to load trending movies.</p>";
    }
  } catch (error) {
    console.error("Error loading trending movies:", error);
  }
}

// Call function when page loads
loadTrending();
