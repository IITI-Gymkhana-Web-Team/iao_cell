import React, { useEffect, useState } from "react";
import { Home } from "./Home/Home";

function App() {
	const [isLoading, SetIsLoading] = useState(true);

	useEffect(() => {
		SetIsLoading(false);
	}, []);

	if (isLoading) return null;
	else
		return (
			<div className="App">
				<Home />
			</div>
		);
}

export default App;
