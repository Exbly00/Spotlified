const songsList = document.querySelector("#favorites-section > .list");

const displayFavorites = () => {
  const favoriteSongs = Object.keys(localStorage).map((id) =>
    JSON.parse(localStorage.getItem(id))
  );

  favoriteSongs.forEach((song) => {
    const songItem = document.createElement("li");

    const isFavorite = localStorage.getItem(song.id);

    const icon = isFavorite ? "favorite" : "favorite_border";

    songItem.innerHTML = `
        <div class="list-item-title">${song.title}</div>
        <div class="list-item-actions">
        <button type="button" class="icon-button favorite-button">
            <span class="material-icons">${icon}</span>
        </button>
        <button type="button" class="icon-button play-button">
            <span class="material-icons">play_arrow</span>
        </button>
        </div>
    `;

    const favoriteButton = songItem.querySelector(".favorite-button");
    favoriteButton.addEventListener("click", (e) => {
      const isFavorite = localStorage.getItem(song.id);

      if (isFavorite) {
        localStorage.removeItem(song.id);
      } else {
        localStorage.setItem(song.id, JSON.stringify(song));
      }

      const icon = isFavorite ? "favorite_border" : "favorite";
      favoriteButton.querySelector(".material-icons").textContent = icon;
    });

    songsList.append(songItem);
  });
};

export { displayFavorites };
