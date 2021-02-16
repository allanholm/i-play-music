import UnderHeading from "./UnderHeading";
import "./UnderHeadingBar.css";
import ViewAllButton from "./ViewAllButton";

export default function UnderHeadingBar({ title }) {
	return (
		<div className="underHeadingBar">
			<UnderHeading title={title} />
			<ViewAllButton />
		</div>
	);
}
