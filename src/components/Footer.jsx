import { Link } from "react-router-dom";
import '../assets/css/Footer.css';
import { ig, sp, yt } from '../utils/socials.json'
import IGLogo from "../assets/vector/IGLogo";
import SpotifyLogo from "../assets/vector/SpotifyLogo";
import YTLogo from "../assets/vector/YTLogo";
import useTheme from "../hooks/useTheme";
import ExternalLink from "./ExternalLink";
import MUI_Dialog from "./MUI_Dialog";

export default function Footer() {
    const theme = useTheme().theme;
    return (
        <footer id="globalFooter">
            <h2 id="footer-title" className={`allCaps ${theme.text} ${theme.textShadow}`}>
                Nicolás
            </h2>
            <div className='flex socials'>
                <ExternalLink to={ig}>
                    <IGLogo size="3rem" themeClass={theme.fill} />
                </ExternalLink>
                <ExternalLink to={sp}>
                    <SpotifyLogo size="3rem" themeClass={theme.fill} />
                </ExternalLink>
                <ExternalLink to={yt}>
                    <YTLogo size="3rem" themeClass={theme.fill} />
                </ExternalLink>
            </div>
            <div className={`flex sitemap ${theme.textShadow}`}>
                <Link to="/" className={theme.text}>Inicio</Link>
                <Link to="/postalesTour" className={theme.text}>Postales Tour</Link>
                {/* <Link to="/"> */}
                <MUI_Dialog titleText="¡Próximamente!" className={theme.text}>Tienda</MUI_Dialog>
                {/* </Link> */}
            </div>
        </footer>
    )
}
