import MenuIcon from "../assets/vector/MenuIcon"
import '../assets/css/Header.css'
import MobileMenu from "./MobileMenu"
import useTheme from "../hooks/useTheme"
import { Link } from "react-router-dom";
import Switch from "./Switch";
import MUI_Dialog from "./MUI_Dialog";
import { useLanguage } from "../context/LanguageProvider";

export default function Header() {
  const hook = useTheme();
  const theme = hook.theme;
  const isHome = hook.isHome;
  const { t } = useLanguage();
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
            <li><Link to="/">{t("nav.home")}</Link></li>
            <li><Link to="/postalesTour">{t("nav.postales")}</Link></li>
            <li><MUI_Dialog titleText={t("nav.comingSoon")}>{t("nav.store")}</MUI_Dialog></li>
          </ul>
        </nav>
        <div className="flex menuRowGroup" id="paddingFix">
          <Switch switchClass={theme.switch}/>
          <span>{t("lang.label")}</span>
        </div>
      </header>
    </>
  )
}
