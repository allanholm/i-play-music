import { useState } from "react";
import "./Category.scss";

export default function Category(props) {
	var [open, setOpen] = useState(false);

	function toggleShowCategory(event) {
		setOpen(!open);
	}

	return (
		<div className="category">
			<div className="category__header">
				<h2 className="category__title">{props.title}</h2>
				<p onClick={toggleShowCategory} className="category__meatballs">
					&hellip;
				</p>
			</div>
			<ul className={"category__list " + (open ? "" : "category__list--hidden")}>
				
			</ul>
		</div>
	);
}
