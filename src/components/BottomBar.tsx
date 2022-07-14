const BottomBar = () => {
	return (
		<footer
			style={{
				height: "5vh",
				minHeight: "30px",
				background: "#0B0E14",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				paddingInline: "20px",
			}}
			className="BottomBar">
			<a
				style={{
					fontSize: "1.1rem",
					color: "#D9F8C4",
					cursor: "pointer",
					textDecoration: "none",
				}}
				href="/">
				<b>Okiba</b> v1.0
			</a>
			<ul
				className="controls"
				style={{
					display: "flex",
					marginBottom: "2px",
					alignItems: "center",
				}}>
				<ButtonControl text="raw" link="/" />
				<Separator />
				<ButtonControl text="save" link="/" />
				<Separator />
				<ButtonControl text="source" link="/" />
			</ul>
		</footer>
	);
};

const ButtonControl = (props: tControlProps) => {
	return (
		<a
			href={props.link}
			style={{
				color: "white",
			}}>
			<li
				style={{
					marginInline: "10px",
					listStyle: "none",
					fontSize: "1rem",
				}}>
				{props.text}
			</li>
		</a>
	);
};

const Separator = () => (
	<div
		style={{
			fontSize: "1rem",
			color: "#839496",
		}}>
		•
	</div>
);

interface tControlProps {
	text: string;
	link: string;
}

export default BottomBar;
