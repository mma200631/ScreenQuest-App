export function renderMovies(movies, container) {
  if (!movies || movies.length === 0) {
    container.innerHTML = "<p>No movies found.</p>";
    return;
  }

  container.innerHTML = movies.map(movie => {
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "images/placeholder.jpg"; 

    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
    const year = movie.release_date ? movie.release_date.split("-")[0] : "Unknown";
    const overview = movie.overview ? movie.overview.slice(0, 80) + "..." : "No description available.";

    return `
      <div class="movie-card">
        <img src="${poster}" alt="${movie.title}">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p class="rating">⭐ ${rating}</p>
          <p class="year">${year}</p>
          <p class="overview">${overview}</p>
          <a href="details.html?id=${movie.id}" class="details-btn">View Details</a>

        </div>
      </div>
    `;
  }).join("");

  // event listener for "View Details" buttons
  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const movieId = btn.getAttribute("data-id");
      window.location.href = `details.html?id=${movieId}`;
    });
  });
}


