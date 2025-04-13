import { useParams } from "react-router-dom";
import songs from "../utils/songs.json";
import { WidgetSpotify, WidgetYouTube } from "../components/SongWidgets";
import "../assets/css/Song.css";
import { useBackground } from "../context/BackgroundProvider";
import { useEffect } from "react";
import Separator from "../components/Separator";
import useTheme from "../hooks/useTheme";

export default function Song() {
  const theme = useTheme().theme;
  const mySong = songs[useParams().name];
  const { applyRootClass } = useBackground();

  useEffect(() => {
    window.scrollTo(0, 0);
    applyRootClass("songRoot");
    return () => applyRootClass("homeRoot");
  }, [applyRootClass]);

  return (
    <main id="songView">
      <Separator title="Canciones" themeClasses={theme} />
      <div id="songColumns">
        <section id="playables">
          <WidgetSpotify url={mySong.spotify} size="large" />
          <WidgetYouTube url={mySong.youtube} />
        </section>
        <section id="lyrics">
          <h2 id="songTitle" className="allCaps">{mySong.title}</h2>
          {mySong.lyrics ? (
            <>
              {mySong.lyrics.map((verse, index) => (
                <p className="flex column" key={`estrofa${index}`}>
                  {verse.map((line, index) => (
                    <span key={`verso${index}`}>{line}</span>
                  ))}
                </p>
              ))}
            </>
          ) : (
            <i>No hay letras para esta canción.</i>
          )}
        </section>
      </div>
    </main>
  );
}
