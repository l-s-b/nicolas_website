import MenuIcon from "../assets/vector/MenuIcon"
import '../assets/css/Header.css'
import MobileMenu from "./MobileMenu"
import useTheme from "../hooks/useTheme"
import { Link } from "react-router-dom";
import Switch from "./Switch";
import MUI_Dialog from "./MUI_Dialog";

export default function Header() {
  const hook = useTheme();
  const theme = hook.theme;
  const isHome = hook.isHome;
  return (
    <>
      {/* MOBILE */}
      <MobileMenu />
      <header className="mobileHeader">
        <Link to="/">
          <h1 className={theme.text}>{!isHome ? 'NICOLÁS' : ''}</h1>
        </Link>
        <MenuIcon size="2.5rem" themeClass={theme.fill} />
      </header>
      {/* DESKTOP */}
      <header className="desktopHeader">
        <Link to="/">
          <h1 className={theme.text}>{!isHome ? 'NICOLÁS' : ''}</h1>
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/postalesTour">Postales Tour</Link></li>
            <li><MUI_Dialog titleText="¡Próximamente!">Tienda</MUI_Dialog></li>
          </ul>
        </nav>
        <div className="flex menuRowGroup" id="paddingFix">
          <Switch switchClass={theme.switch}/>
          <span>ES/EN</span>
        </div>
      </header>
    </>
  )
}
