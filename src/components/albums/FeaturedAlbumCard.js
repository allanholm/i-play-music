import './FeaturedAlbumCard.css';

export default function FeaturedAlbumCard({album}) {
  return (
    <img className="featuredAlbumCard__image" src={album.images[1].src} alt={album.title + " by " + album.artist}/>
  )
}