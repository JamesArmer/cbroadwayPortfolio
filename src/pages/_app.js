import Theme from '../styles/theme';
import "../styles/GlobalComponents/VideoPlayers/LandscapePlayer.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 