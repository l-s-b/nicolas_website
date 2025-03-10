import '../assets/css/Home.css'
import { ig, sp, yt } from '../utils/socials.json'
import IGLogo from '../assets/vector/IGLogo'
import SpotifyLogo from '../assets/vector/SpotifyLogo'
import YTLogo from '../assets/vector/YTLogo'
import Separator from '../components/Separator'
import useTheme from '../hooks/useTheme'
import songs from '../utils/songs.json'
import SongLink from '../components/SongLink'
import VerMas from '../components/VerMas'
import ExternalLink from '../components/ExternalLink'
import { useBackground } from '../context/BackgroundProvider'
import { useEffect } from 'react'

export default function Home() {
  const theme = useTheme().theme
  const { applyRootClass } = useBackground();
  useEffect(() => { applyRootClass('homeRoot') }, [applyRootClass]);
  const bio = [
    "Soy un artista argentino conectado con varias disciplinas, donde la música ocupa un lugar esencial condensando mis emociones y anhelos en forma de canciones.",
    /* "Lírica sensible, mente soñadora y corazón intenso.", */
    "Camino entre los estribillos pop y los paisajes sonoros alternativos. Te invito a ser parte de este viaje."
  ]

  return (
    <main id="home">
      <section id="hero">
        <h2 id="hello">
          <span>N</span>
          <span>I</span>
          <span>C</span>
          <span>O</span>
          <span>L</span>
          <span>Á</span>
          <span>S</span>
        </h2>
        <div id="homeBio">{
          bio.map( (p, key) => (
            <p
              className={`centerText ${theme.textShadow}`}
              key={key}
            >{p}</p>
          ) )
        }</div>
        <div id="air"></div>
        <div className="flex home-socials">
          <ExternalLink to={ig}><IGLogo size="1.75rem" themeClass={theme.fill} /></ExternalLink>
          <ExternalLink to={sp}><SpotifyLogo size="1.75rem" themeClass={theme.fill} /></ExternalLink>
          <ExternalLink to={yt}><YTLogo size="1.75rem" themeClass={theme.fill} /></ExternalLink>
        </div>
      </section>
      <section id="songs" className="flex column">
        <Separator title="Canciones" themeClasses={theme} />
        <SongLink song={songs.DondeFlorezco} textShadow={theme.textShadow} />
        <SongLink song={songs.Postales} textShadow={theme.textShadow} />
        <SongLink song={songs.RegaloAcustico} textShadow={theme.textShadow} />
        <SongLink song={songs.VivoEnUnaCancion} textShadow={theme.textShadow} />
        <SongLink song={songs.NadaXSentir} textShadow={theme.textShadow} />
        <VerMas path="/songs" />
      </section>
    </main>
  )
}
  