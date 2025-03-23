import { loadArtists } from "../api";

const artistList = document.querySelector("artist-list");

const displayArtists = async () => {
  artistList.innerHTML = "";

  const artists = await loadArtists();

  artists.forEach((artist) => {
    const artistItem = document.createElement("artist-cover");

    artistItem.setAttribute("image_url", artist.image_url);
    artistItem.setAttribute("name", artist.name);
    artistItem.setAttribute("href", `#artistsongs-${artist.id}`);

    artistList.append(artistItem);
  });
};

export { displayArtists };
