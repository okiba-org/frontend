import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

const BottomBar: FunctionComponent<propTypes> = props => {
	return (
		<footer
			style={{
				height: "5vh",
				minHeight: "30px",
				background: "#0B0E14",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				paddingInline: "15px",
			}}
			className="BottomBar"
		>
			<a
				style={{
					color: "#D9F8C4",
					cursor: "pointer",
					textDecoration: "none",
				}}
				href="/"
			>
				<b>Okiba</b> v1.0
			</a>
			<ul
				className="controls"
				style={{
					display: "flex",
					marginBottom: "2px",
					alignItems: "center",
				}}
			>
				{/* make component of these links some day */}

				{props.isNewPaste ? (
					<a
						href="#"
						onClick={async () => {
							if (props.postCallback != undefined) {
								await props.postCallback();
							}
						}}
						style={linkStyle}
					>
						<li style={listStyle}>save</li>
					</a>
				) : (
					<a href={`/raw/${useParams().id}`} style={linkStyle}>
						<li style={listStyle}>raw</li>
					</a>
				)}
				<Separator />
				<a href={"/"} style={linkStyle}>
					<li style={listStyle}>new</li>
				</a>
				<Separator />
				<a
					href={"https://github.com/okiba-org/"}
					target="_blank"
					style={linkStyle}
				>
					<li style={listStyle}>source</li>
				</a>
			</ul>
		</footer>
	);
};

const linkStyle = {
	color: "white",
};

const listStyle = {
	marginInline: "10px",
	listStyle: "none",
	fontSize: "2vh",
};

const Separator = () => (
	<div
		style={{
			fontSize: "1rem",
			color: "#839496",
		}}
	>
		•
	</div>
);

interface propTypes {
	isNewPaste: boolean;
	postCallback: Function | undefined;
}

export default BottomBar;
