/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/menuUtils";
import Switch from "./Switch";
import HomeIcon from "../assets/vector/HomeIcon";
import PostalesIcon from "../assets/vector/PostalesIcon";
import TiendaIcon from "../assets/vector/TiendaIcon";
import '../assets/css/MobileMenu.css';
import MUI_Dialog from "./MUI_Dialog";

export default function MobileMenu() {
    const BROWN_THEME = {
        fill: "brownFill",
        stroke: "brownStroke",
        border: "brownBorder",
        bg: "brownBg",
        switch: "brownSwitch"
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
                    <Link onClick={toggleMenu} className="flex menuRow" to="/postalesTour">
                        <div className="flex menuRowGroup">
                            <PostalesIcon size="3rem" themeClass={BROWN_THEME.fill} />
                            Postales Tour
                        </div>
                        <span className="bigger">&gt;</span>
                    </Link>
                </li>
                <li>
                    <MUI_Dialog titleText="¡Próximamente!">
                    <div onClick={toggleMenu} className="flex menuRow">
                        <div className="flex menuRowGroup">
                            <TiendaIcon size="3rem" themeClass={BROWN_THEME.stroke} />
                            Tienda
                        </div>
                        <span className="bigger">&gt;</span>
                        </div>
                    </MUI_Dialog>
                </li>
                <li>
                    <div className="flex menuRowGroup" id="paddingFix">
                        <Switch switchClass={BROWN_THEME.switch}/>
                        <span>ES/EN</span>
                    </div>
                </li>
            </ul>
        </nav>
    </aside>
  )
}
