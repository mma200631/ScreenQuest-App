import { renderMovies } from "./display.mjs";

const Favorite_Key = "ScreenQuestFavorite";

// Containers
const containers = document.getElementById("favoritesGrid");
const noFavorites = document.getElementById("noFavorites");

// Get favorites from localStorage
function getFavorites() {
  const stored = localStorage.getItem(Favorite_Key);
  return stored ? JSON.parse(stored) : [];
}

// Add a movie to favorites
export function addFavorite(movie) {
  const favorites = getFavorites();

  // Avoid duplicates
  const exists = favorites.some(fav => fav.id === movie.id);
  if (!exists) {
    favorites.push(movie);
    localStorage.setItem(Favorite_Key, JSON.stringify(favorites));
    loadFavorites(); // Refresh the favorites grid if user is on favorites page
  }
}

// Remove a movie from favorites
function removeFavorites(movieId) {
  const favorites = getFavorites().filter(m => m.id !== movieId);
  localStorage.setItem(Favorite_Key, JSON.stringify(favorites));
  loadFavorites();
}

// Load and render favorites
export function loadFavorites() {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    containers.style.display = "none";
    noFavorites.style.display = "block";
    return;
  }

  noFavorites.style.display = "none";
  containers.style.display = "grid";

  // Add remove button to each favorite
  const moviesWithRemove = favorites.map(movie => ({
    ...movie,
    removeButton: true
  }));

  renderMovies(moviesWithRemove, containers, removeFavorites);
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", loadFavorites);
