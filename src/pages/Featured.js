import Heading from '../components/Heading';
import NavigationBar from '../components/NavigationBar';
import SiteHeader from '../components/SiteHeader';

export default function Featured() {
  return (
    <div className="featuredPage">
      <SiteHeader title="Featured"/>
      <Heading title="Featured" />
      
      <NavigationBar /> 
    </div>
  );
}