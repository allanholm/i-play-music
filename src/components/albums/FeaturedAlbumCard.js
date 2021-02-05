import {Link} from '@reach/router';
import './FeaturedAlbumCard.css';

export default function FeaturedAlbumCard({album}) {
  return (
    <Link to={"/albums/"+ (album.id)} >
      <img className="featuredAlbumCard__image" src={album.images[1].url} alt={album.name + " by " + album.artists[0].name}/>
    </Link>
  )
}