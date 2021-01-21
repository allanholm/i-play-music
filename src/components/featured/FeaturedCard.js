import './FeaturedCard.css'

export default function FeaturedCard(props) {
  return (
    <div className="featuredCard">
      <img className="featuredCard__img" src={props.img} alt=""/>
      <p className="featuredCard__title">{props.title}</p>
      <p className="featuredCard__category">{props.category}</p>
    </div>
  )
}