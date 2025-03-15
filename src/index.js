import "./css/elements/artist-list";
import "./css/elements/artist-cover";

import { displaySection } from "./helpers";
import { displayArtists } from "./sections/artists";

const router = () => {
  switch (window.location.hash) {
    case "#artists":
      displaySection("#artists");
      displayArtists();
      break;
    default:
      displaySection("#home");
      break;
  }
};

window.addEventListener("hashchange", router);

router();
