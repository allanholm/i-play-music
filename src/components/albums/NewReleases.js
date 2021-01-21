import { useEffect, useState } from 'react';
import UnderHeadingBar from '../UnderHeadingBar';
import NewReleaseCard from './NewReleaseCard';
import './NewReleases.css';

export default function NewReleases(props) {
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
    <div className="newReleases">
      <UnderHeadingBar title="New Releases" />
      {albums.map(function (album) {
        return <NewReleaseCard key={ album.id } album={ album } />;
      })}
    </div>
  )
}