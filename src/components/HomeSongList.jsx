import Separator from "./Separator";
import SongLink from "./SongLink";
import VerMas from "./VerMas";
import songs from '../utils/songs.json';
import useTheme from '../hooks/useTheme';

export default function HomeSongList() {
const theme = useTheme().theme;
  return (
    <section id="songs">
        <Separator title="Canciones" themeClasses={theme} />
        <div className="flex songlist">
          <SongLink song={songs.Ciruelas} textShadow={theme.textShadow} />
          <SongLink song={songs.DondeFlorezco} textShadow={theme.textShadow} />
          <SongLink song={songs.RegaloAcustico} textShadow={theme.textShadow} />
          <SongLink song={songs.VivoEnUnaCancion} textShadow={theme.textShadow} />
          <SongLink song={songs.NadaXSentir} textShadow={theme.textShadow} />
          <a id="songListFill"></a>
        </div>
        <VerMas path="/songs" />
      </section>
  )
}
