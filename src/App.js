import React, { useEffect, useState } from "react";
import { Preloader } from "./Home/components/Preloader/Preloader";
import { Home } from "./Home/Home";

function App() {
	const [isLoading, SetIsLoading] = useState(true);

	useEffect(() => {
		SetIsLoading(false);
	}, []);

	return (
		<div className="App">
			{isLoading && <Home />}
			{!isLoading && <Preloader />}
		</div>
	);
}

export default App;
