// FOOTER DATE SCRIPT
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  // Current year
  yearSpan.textContent = new Date().getFullYear();

  // Last modified date
  lastModifiedSpan.textContent = document.lastModified;
});
