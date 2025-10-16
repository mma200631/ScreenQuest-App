import { fetchFromTMDB } from "./utils.mjs";
import { addFavorite } from "./storage.mjs"; // import addFavorite function

document.addEventListener("DOMContentLoaded", async () => {
  // 1️⃣ Get movie ID from URL
  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");

  if (!movieId) {
    document.querySelector(".movie-details").innerHTML = "<p>No movie selected.</p>";
    return;
  }

  // 2️⃣ Fetch movie details from TMDb
  const data = await fetchFromTMDB(`/movie/${movieId}?append_to_response=videos`);

  if (!data) {
    document.querySelector(".movie-details").innerHTML = "<p>Failed to load movie details.</p>";
    return;
  }

  // 3️⃣ Populate movie info
  document.getElementById("movieTitle").textContent = data.title || "No Title";
  document.getElementById("movieSynopsis").textContent = data.overview || "No synopsis available";
  document.getElementById("movieGenre").textContent = data.genres
    ? data.genres.map(g => g.name).join(", ")
    : "N/A";
  document.getElementById("movieRelease").textContent = data.release_date || "N/A";
  document.getElementById("movieRuntime").textContent = data.runtime
    ? `${data.runtime} min`
    : "N/A";
  document.getElementById("movieRating").textContent = data.vote_average
    ? `${data.vote_average.toFixed(1)}/10`
    : "N/A";

  // 4️⃣ Update poster
  const posterEl = document.getElementById("moviePoster");
  const posterUrl = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "images/placeholder-poster.jpg";
  posterEl.src = posterUrl;
  posterEl.alt = data.title || "Movie Poster";

  // 5️⃣ Embed trailer if available
  const trailerEl = document.getElementById("movieTrailer");
  if (data.videos && data.videos.results.length) {
    const trailer = data.videos.results.find(v => v.type === "Trailer" && v.site === "YouTube");
    if (trailer) {
      trailerEl.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${trailer.key}" frameborder="0" allowfullscreen></iframe>`;
    } else {
      trailerEl.textContent = "No trailer available.";
    }
  } else {
    trailerEl.textContent = "No trailer available.";
  }

  const currentMovie = {
  id: data.id,
  title: data.title,
  poster: data.poster_path 
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : "images/placeholder-poster.jpg"
};

const favButton = document.getElementById("addFavoriteBtn");
if (favButton) {
  favButton.addEventListener("click", () => {
    addFavorite(currentMovie);
    alert(`${currentMovie.title} added to favorites! ⭐`);
  });
  }

// Recommendations
  const recContainer = document.getElementById("recommendations");
  if (recContainer) loadRecommendations(movieId, recContainer);

  // Streaming platforms
  const streamContainer = document.getElementById("streamingPlatforms");
  if (streamContainer) loadStreaming(movieId, streamContainer);

});
