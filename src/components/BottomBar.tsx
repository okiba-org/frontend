import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

const BottomBar: FunctionComponent<propTypes> = props => {
	return (
		<footer
			style={{
				height: "2rem",
				minHeight: "1rem",
				position: "relative",
				left: "0",
				bottom: "0",
				width: "100%",
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
					fontSize: "1rem",
				}}
				href="/"
			>
				<b>Okiba</b> v1.0
			</a>
			<ul
				className="controls"
				style={{
					display: "flex",
					alignItems: "center",
					marginBottom: "2px",
				}}
			>
				{/* make component of these links some day */}

				{props.isNewPaste ? (
					<li style={listStyle}>
						<a
							href="#"
							onClick={async () => {
								if (props.postCallback != undefined) {
									await props.postCallback();
								}
							}}
							style={linkStyle}
						>
							save
						</a>
					</li>
				) : (
					<li style={listStyle}>
						<a href={`/raw/${useParams().id}`} style={linkStyle}>
							raw
						</a>
					</li>
				)}
				<Separator />
				<li style={listStyle}>
					<a href={"/"} style={linkStyle}>
						new
					</a>
				</li>
				<Separator />
				<li style={listStyle}>
					<a
						href={"https://github.com/okiba-org/"}
						target="_blank"
						style={linkStyle}
					>
						source
					</a>
				</li>
			</ul>
		</footer>
	);
};

const linkStyle = {
	color: "rgba(255, 255, 255, 0.774)",
};

const listStyle = {
	marginInline: "10px",
	listStyle: "none",
	fontSize: "1rem",
	height: "100%",
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
