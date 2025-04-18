import songs from "../utils/songs.json";
import "../assets/css/Song.css";
import { useBackground } from "../context/BackgroundProvider";
import { useEffect } from "react";
import Separator from "../components/Separator";
import useTheme from "../hooks/useTheme";
import SongLink from "../components/SongLink";

export default function Songs() {
  const theme = useTheme().theme;
  const { applyRootClass } = useBackground();
  function SongMap () {
    const songList = Object.entries(songs).map(([key, song]) => {
      return <SongLink song={song} textShadow={theme.textShadow} key={key} />
    });
    return <>
      {songList}
      <a id="songListFill"></a>
    </>
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    applyRootClass("songRoot");
    return () => applyRootClass("homeRoot");
  }, [applyRootClass]);

  return (
    <main id="allSongs">
      <section id="songs" className="flex songlist">
        <Separator title="Canciones" themeClasses={theme} />
        <SongMap />
      </section>
    </main>
  );
}

