import FeaturedAlbums from '../components/albums/FeaturedAlbums';
import NewReleases from '../components/albums/NewReleases';
import Heading from '../components/Heading';
import SiteHeader from '../components/SiteHeader';
import './Albums.css';

export default function Albums() {
  return (
    <div className="albumsPage">
      <SiteHeader title="Albums" />
      <Heading title="Albums" />
      <FeaturedAlbums />
      <NewReleases title="album names" artist="artist name" image="https://via.placeholder.com/50" songs="12" />
    </div>
  )
}