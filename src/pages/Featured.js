import FeaturedCard from '../components/featured/FeaturedCard';
import Heading from '../components/Heading';
import NavigationBar from '../components/NavigationBar';
import SiteHeader from '../components/SiteHeader';
import './Featured.css'

export default function Featured() {
  return (
    <div className="featuredPage">
      <SiteHeader title="Featured"/>
      <Heading title="Featured" />
      <FeaturedCard img="https://via.placeholder.com/325x425" title="The Greatest Showman" category="Soundtrack"/>
      <FeaturedCard img="https://via.placeholder.com/325x425" title="The Greatest Showman" category="Soundtrack"/>
      <NavigationBar className="navigationBar"/> 
    </div>
  );
}