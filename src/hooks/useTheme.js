import { useLocation } from "react-router-dom";

export default function useTheme() {
    const path = useLocation().pathname;
    const isHome = path === "/";
    const theme = isHome ? (
        {
            fill: "whiteFill",
            text: "whiteText",
            stroke: "whiteStroke",
            bg: "whiteBg",
            textShadow: "whiteTextShadow",
            switch: "whiteSwitch"
        } ) : (
        {
            fill: "brownFill",
            text: "brownText",
            stroke: "brownStroke",
            bg: "brownBg",
            textShadow: "brownTextShadow",
            switch: "brownSwitch"
        }
    )

  return { theme, isHome };
}