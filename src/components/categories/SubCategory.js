import "./SubCategory.scss";

export default function SubCategory(props) {
	return (
		<li className="subCategory">
			<p className="subCategory__title">{props.title}</p>
			<img className="subCategory__image" src="./images/icons/forwardArrow.png" alt="" />
		</li>
	);
}
