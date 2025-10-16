export async function loadStreamingFromTMDb(tmdbId, type, container) {
  try {
    container.innerHTML = "<p>Loading streaming info...</p>";

    // Step 1: get Watchmode ID
    const response = await fetch(
      `https://api.watchmode.com/v1/search/?apiKey=I2WNBpJjeaUqBhHCiSfmHjNCfRi2GtYhjCNfUowH&search_field=tmdb_id&search_value=${tmdbId}&types=${type}`
    );
    const data = await response.json();
    const watchmodeId = data.title_results?.[0]?.id;

    if (!watchmodeId) {
      container.innerHTML = "<p>No streaming information available.</p>";
      return;
    }

    // Step 2: get streaming sources
    await loadStreaming(watchmodeId, container);
  } catch (error) {
    console.error("Streaming load error:", error);
    container.innerHTML = "<p>Error loading streaming info.</p>";
  }
}
