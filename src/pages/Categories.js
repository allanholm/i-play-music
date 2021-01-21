import Category from '../components/categories/Category';
import Heading from '../components/Heading';
import SiteHeader from '../components/SiteHeader';
import './Categories.css';

export default function Categories(props) {
  return(
    <div className="categoriesPage">
      <SiteHeader title="Categories"/>
      <Heading title="Categories" />
      <Category title="Alternative" color="#D70060" />
      <Category title="Blues" color="#E54028"/>
    </div>
  )
}