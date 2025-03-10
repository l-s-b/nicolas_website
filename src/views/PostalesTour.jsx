import { useBackground } from "../context/BackgroundProvider";
import { useEffect } from "react";
import useTheme from "../hooks/useTheme";

export default function PostalesTour() {
  const theme = useTheme().theme;
  const { applyRootClass } = useBackground();

  useEffect(() => {
    window.scrollTo(0, 0);
    applyRootClass("postalesRoot");
    return () => applyRootClass("homeRoot");
  }, [applyRootClass]);

  return (
    <main>
      <img src="./src/assets/img/portada-postales.png" alt="POSTALES TOUR" />

    </main>
  );
}
