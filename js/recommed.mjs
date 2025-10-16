import { fetchFromTMDB } from "./utils.mjs";
import { renderMovies } from "./display.mjs";

export async function loadRecommendations(movieId, container) {
  try {
    const data = await fetchFromTMDB(`/movie/${movieId}/recommendations`);
    const recommendations = data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "images/placeholder-poster.jpg"
    }));
    
    renderMovies(recommendations, container);
  } catch (error) {
    container.innerHTML = "<p>No recommendations available.</p>";
  }
}
