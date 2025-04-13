import { useBackground } from "../context/BackgroundProvider";
import { useEffect } from "react";
/* import useTheme from "../hooks/useTheme"; */
import portadaPostales from "../assets/img/portada-postales.webp";
import { WidgetSpotify, WidgetYouTube } from "../components/SongWidgets";

export default function PostalesTour() {
  /* const theme = useTheme().theme; */
  const { applyRootClass } = useBackground();
  const postalesSpotifyURL = "https://open.spotify.com/embed/album/4V0ByzPg7aICMFNcNqPhr7?utm_source=generator"
  const postalesYoutubeURL = "https://www.youtube.com/embed/lSxJUTgzL9E?si=fyVfHu2WiK0E-uwj"

  useEffect(() => {
    window.scrollTo(0, 0);
    applyRootClass("postalesRoot");
    return () => applyRootClass("homeRoot");
  }, [applyRootClass]);

  return (
    <main>
      <img src={portadaPostales} alt="POSTALES TOUR" />
      <WidgetSpotify url={postalesSpotifyURL} size="large" />
      <WidgetYouTube url={postalesYoutubeURL} />
    </main>
  );
}
