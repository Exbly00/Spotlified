import { loadSongs } from "../api";

const songsList = document.querySelector("#artist-songs-section > .list");

const displayArtistSongs = async (id) => {
  const songs = await loadSongs(id);

  songs.forEach((song) => {
    const songItem = document.createElement("li");
    songItem.textContent = song.title;

    songsList.append(songItem);
  });
};

export { displayArtistSongs };
