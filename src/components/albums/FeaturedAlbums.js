import { useEffect, useState } from 'react';
import UnderHeadingBar from '../UnderHeadingBar';
import FeaturedAlbumCard from './FeaturedAlbumCard';
import './FeaturedAlbums.css';

export default function FeaturedAlbums() {
  var [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("./database.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setAlbums(data.albums)
    })

  }, []);

  return(
    <div className="featuredAlbums">
      <UnderHeadingBar title="Featured Albums"/>
      <div className="featuredAlbumsSlider">
        {albums.map(function (album) {
          if(album.featured) {
            return <FeaturedAlbumCard key={ album.id } album={ album } />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  )
}