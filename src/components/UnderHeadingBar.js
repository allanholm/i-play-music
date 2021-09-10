import UnderHeading from "./UnderHeading";
import "./UnderHeadingBar.css";

export default function UnderHeadingBar({ title }) {
	return (
		<div className="underHeadingBar">
			<UnderHeading title={title} />
		</div>
	);
}
