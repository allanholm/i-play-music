import {Link} from '@reach/router';
import './FeaturedAlbumCard.css';

export default function FeaturedAlbumCard({album}) {
  return (
    <Link to={"/albums/"+ (album.id).toString()} >
      <img className="featuredAlbumCard__image" src={album.images[1].src} alt={album.title + " by " + album.artist}/>
    </Link>
  )
}