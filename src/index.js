import "./css/elements/artist-list";
import "./css/elements/artist-cover";

import { displaySection } from "./helpers";
import { displayArtists } from "./sections/artists";
import { displayArtistSongs } from "./sections/artist-songs";
import { displayFavorites } from "./sections/favorites";

const router = () => {
  const splitHash = window.location.hash.split("-");

  switch (splitHash[0]) {
    case "#artists":
      displaySection("#artists");
      displayArtists();
      break;
    case "#artistsongs":
      const id = splitHash[1];

      displaySection("#artist-songs");
      displayArtistSongs(id);
      break;

    case "#favorites":
      displaySection("#favorites");
      displayFavorites();

      break;

    default:
      displaySection("#home");
      break;
  }
};

window.addEventListener("hashchange", router);

router();
