import {useState} from 'react';
import './Category.css';
import SubCategory from './SubCategory';

export default function Category(props) {
  var [open, setOpen] = useState(false);

  function toggleShowCategory(event) {
    setOpen(!open);
  }

  return (
    <div className="category">
      <div className="category__header" style={{backgroundColor: props.color}}>
        <h2 className="category__title">{props.title}</h2>
        <p onClick={toggleShowCategory} className="category__meatballs">&hellip;</p>
      </div>
      <ul className={"category__list " + (open ? "" : "category__list--hidden")}>
        <SubCategory title="Acoustic Blues"/>
        <SubCategory title="Blues Rock" />
        <SubCategory title="Canadian Blues" />
        <SubCategory title="Jazz Blues" />
        <SubCategory title="Piano Blues" />
        <SubCategory title="Soul Blues" />
        <SubCategory title="Swamp Blues" />
      </ul>
    </div>
  )
}