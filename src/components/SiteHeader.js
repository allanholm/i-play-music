import "./SiteHeader.scss";
import { IoChevronBack, IoSearch } from "react-icons/io5";

export default function SiteHeader(probs) {
	return (
		<div className="siteHeader">
			<IoChevronBack />
			<h1 className="siteHeader__title">{probs.title}</h1>
			<IoSearch />
		</div>
	);
}
