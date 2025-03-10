/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/menuUtils";
import Switch from "./Switch";
import HomeIcon from "../assets/vector/HomeIcon";
import PostalesIcon from "../assets/vector/PostalesIcon";
import TiendaIcon from "../assets/vector/TiendaIcon";
import '../assets/css/MobileMenu.css';

export default function MobileMenu() {
    const BROWN_THEME = {
        fill: "brownFill",
        stroke: "brownStroke"
    }

  return (
    <aside id="mobileMenu" className="flex column allCaps">
        <button id="menuX" onClick={toggleMenu}>&times;</button>
        <nav>
            <ul className="flex column">
                <li>
                    <Link onClick={toggleMenu} className="flex menuRow" to="/">
                        <div className="flex menuRowGroup">
                            <HomeIcon size="3rem" themeClass={BROWN_THEME.fill} />
                            Inicio
                        </div>
                        <span className="bigger">&gt;</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} className="flex menuRow" to="/postales">
                        <div className="flex menuRowGroup">
                            <PostalesIcon size="3rem" themeClass={BROWN_THEME.fill} />
                            Postales Tour
                        </div>
                        <span className="bigger">&gt;</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={toggleMenu} className="flex menuRow" to="/tienda">
                        <div className="flex menuRowGroup">
                            <TiendaIcon size="3rem" themeClass={BROWN_THEME.stroke} />
                            Tienda
                        </div>
                        <span className="bigger">&gt;</span>
                    </Link>
                </li>
                <li>
                    <div className="flex menuRowGroup" id="paddingFix">
                        <Switch />
                        <span>ES/EN</span>
                    </div>
                </li>
            </ul>
        </nav>
    </aside>
  )
}
