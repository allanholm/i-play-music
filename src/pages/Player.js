import PlayerCard from '../components/player/PlayerCard';
import PlayerControls from '../components/player/PlayerControls';
import SiteHeader from '../components/SiteHeader';
import './Player.css';

export default function Player() {
  return(
    <div className="player">
      <SiteHeader title="Playing" />
      <PlayerCard />
      <PlayerControls />
    </div>
  )
}