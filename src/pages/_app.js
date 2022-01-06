import Theme from "../styles/theme";
import "../styles/GlobalComponents/VideoPlayers/LandscapePlayer.css";
import "../styles/GlobalComponents/VideoPlayers/SquarePlayer.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
    document.title = "Charles Broadway";
  }, []);

  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
