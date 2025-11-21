import { useEffect } from 'react';
import { FaPlay, FaPause, FaInstagram, FaWhatsapp, FaChevronDown, FaMapMarkerAlt, FaMusic, FaChevronUp } from 'react-icons/fa';
import useAudioPlayer from './hooks/useAudioPlayer';
import MusicPlayerButton from './components/MusicPlayerButton';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Ceremony from './components/Ceremony';
import SongRequest from './components/SongRequest';
import FaqAccordion from './components/FaqAccordion';
import Rsvp from './components/Rsvp';
import SocialFooter from './components/SocialFooter';
import Song from './assets/music/wedding-song.mp3';

export default function App() {
  const { isPlaying, togglePlay, showSplash, startMusic } = useAudioPlayer(Song);

  // Block scrolling when splash screen is shown
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSplash]);

  return (
    <div className="app">
      {showSplash && (
        <div className="splash-screen" onClick={startMusic}>
          <div className="splash-content">
            <h1 className="splash-title">Lihuel y Giane</h1>
            <p className="splash-subtitle">¡NOS CASAMOS!</p>
            <button className="splash-btn">
              <FaPlay /> Entrar
            </button>
          </div>
        </div>
      )}
      <MusicPlayerButton isPlaying={isPlaying} onToggle={togglePlay} />
      <Hero />
      <Countdown />
      <Gallery />
      <Ceremony />
      <SongRequest />
      <FaqAccordion />
      <Rsvp />
      <SocialFooter />
    </div>
  );
}