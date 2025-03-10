import MenuIcon from "../assets/vector/MenuIcon"
import '../assets/css/Header.css'
import MobileMenu from "./MobileMenu"
import useTheme from "../hooks/useTheme"
import { Link } from "react-router-dom";

export default function Header() {
  const hook = useTheme();
  const theme = hook.theme;
  const isHome = hook.isHome;
  return (
    <>
      <MobileMenu />
      <header className="mobileHeader">
        <Link to="/">
          <h1 className={theme.text}>{!isHome ? 'NICOLÁS' : ''}</h1>
        </Link>
        <MenuIcon size="2.5rem" themeClass={theme.fill} />
      </header>
    </>
  )
}
