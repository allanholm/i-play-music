import './SiteHeader.css';

export default function SiteHeader(probs) {
  return (
    <div className="siteHeader">
      <img src="./images/icons/backArrow.png" alt=""/>
      <h1 className="siteHeader__title">{probs.title}</h1>
      <img src="./images/icons/search.png" alt=""/>
    </div>
  )
}