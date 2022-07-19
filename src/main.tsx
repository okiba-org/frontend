import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const LazyApp = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Suspense fallback={"Loading..."}>
			<LazyApp />
		</Suspense>
	</React.StrictMode>,
);
