import IGLogo from "../assets/vector/IGLogo";
import SpotifyLogo from "../assets/vector/SpotifyLogo";
import YTLogo from "../assets/vector/YTLogo";
import ExternalLink from "./ExternalLink";
import { ig, sp, yt } from '../utils/socials.json';
import useTheme from '../hooks/useTheme';
import { useLanguage } from '../context/LanguageProvider';

export default function HomeHero() {
    const theme = useTheme().theme;
    const { t } = useLanguage();
    const bio = [
        t("hero.bio1"),
        t("hero.bio2")
    ]
  return (
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
            <ExternalLink to={ig}>
                <IGLogo size="1.75rem" themeClass={theme.fill} />
            </ExternalLink>
            <ExternalLink to={sp}>
                <SpotifyLogo size="1.75rem" themeClass={theme.fill} />
            </ExternalLink>
            <ExternalLink to={yt}>
                <YTLogo size="1.75rem" themeClass={theme.fill} />
            </ExternalLink>
        </div>
      </section>
  )
}
