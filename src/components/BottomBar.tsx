const BottomBar = () => {
	return (
		<div
			style={{
				height: "5vh",
				minHeight: "30px",
				background: "#0B0E14",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				paddingInline: "20px",
				justifySelf: "end",
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
					justifyItems: "center",
					marginBottom: "2px",
				}}>
				<ButtonControl text="raw" link="/" />
				<Separator />
				<ButtonControl text="save" link="/" />
				<Separator />
				<ButtonControl text="source" link="/" />
			</ul>
		</div>
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
