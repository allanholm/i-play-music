import FeaturedCard from "./FeaturedCard";

export default function FeaturedCall({ albums }) {
  var allAlbums = [];
	allAlbums = albums;

  console.log(allAlbums);

	return (
    <>
      {allAlbums.map(function (album) {
        return <FeaturedCard 
                key={album.id} 
                album={album} />;
        })}
    </>
	);
}