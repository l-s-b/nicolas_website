/* eslint-disable react/prop-types */
import { toggleMenu } from "../../utils/menuUtils";
export default function MenuIcon({size, themeClass}) {

  return (
    <svg onClick={toggleMenu} className={themeClass} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier">
            <path d="M.5 7h15v2H.5zm0 5h15v2H.5zm0-10h15v2H.5z"></path>
        </g>
    </svg>
  )
}
