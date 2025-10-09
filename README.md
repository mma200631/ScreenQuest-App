# 🎬 Movie Explorer Web Application

## Overview
A **Movie Explorer Web Application** that allows users to search for movies, explore trending films, watch trailers, and get streaming platform details.

### Problem to Solve
Movie lovers spend too much time switching between different sites to find trailers, ratings, and streaming availability.  

### Motivation
Combine all essential and important movie details into **one clean, easy-to-use platform**.

---

## 🎯 Target Audience
- Movie enthusiasts looking for trailers, ratings, and reviews.  
- Families and friends looking for what to watch next.  
- Users who want to track or save movies to watch later.  
- Anyone who loves a good movie!  

---

## 🚀 Major Functions
- **Movie Search:** Search by title, genre, or release year.  
- **Trending/Popular:** Display trending movies.  
- **Detailed Movie Info:** Cast, producers, synopsis, runtime, and release date.  
- **Streaming Availability:** Show which platforms are streaming the movie.  
- **Trailer Player:** Play official trailers directly.  
- **Favorites/Watchlist:** Save movies to a personal watch list (via localStorage).  
- **Recommendations:** Suggest similar movies based on a selected title.  
- **User Review & Ratings:** Display reviews and ratings from multiple sources.  

---

## 🔗 External Data Sources
1. **TMDb API (The Movie Database)**  
   - Main source for movies, TV shows, genres, posters, cast, crews, trailers, and trending list.  
   - Data: Movie/TV details, posters, trailers, favorites/watchlist items.  

2. **OMDb API (Open Movie Database)**  
   - Provides additional ratings (IMDb, Rotten Tomatoes, Metacritic).  
   - Data: Ratings, review scores, short plot summaries.  

3. **Watchmode API (or JustWatch)**  
   - Shows streaming availability (Netflix, Disney+, Hulu, etc.).  
   - Data: Streaming platform links, rental pricing, country-specific availability.  

4. **TasteDive API**  
   - Generates movie recommendations based on a user’s favorite title.  
   - Data: Recommended movie IDs and names (cached to reduce API calls).  

---

## 📂 Module List
### HTML, CSS, JSON, JS  
- **search.mjs** – Handles user input & fetches search results.  
- **detail.mjs** – Displays full movie details (cast, ratings, streaming).  
- **recommend.mjs** – Suggests similar movies (TasteDive or TMDb).  
- **streaming.mjs** – Fetches streaming availability.  
- **storage.mjs** – Saves favorites/watchlist (localStorage).  
- **display.mjs** – Renders results, details, and streaming links to the DOM.  
- **events.mjs** – Handles clicks, filters, and UI actions.  
- **utils.mjs** – Reusable helpers (API requests, formatters, error handling).  

---

## 🎨 Graphic Identity
- **Colors:** Midnight Blue `#1c1f26`, Neon Red `#e50914`, Light Gray `#f4f4f4`  
- **Typography:** Montserrat or Poppins for headings, Open Sans for body  
- **Icon:** Play button inside a film reel  

---

## 🗓 Timeline
- **Week 5:** API setup, data fetching, wireframes  
- **Week 6:** UI build (search, results, details pages, etc.)  
- **Week 7:** Testing, polish, deploy  

---

## 🛠 Challenges
1. Managing API rate limits (TMDb daily request limits).  
2. Ensuring trailer playback works across devices.  
3. Combining data from multiple APIs into a seamless experience.  

---

## 📌 Trello Board
[View Project Plan on Trello](https://trello.com/invite/b/68d86c3002c0eeadba217e29/ATTIc03a3414aa481f9aaabcb5cd1def53b9930009A3/movie-discovery-streaming-guide-project-plan)

