import React, { useEffect, useState } from "react";
import { NoAuth } from "./NoAuth/NoAuth";

function App() {
	const [isLoading, SetIsLoading] = useState(true);

	useEffect(() => {
		SetIsLoading(false);
	}, []);

	if (isLoading) return null;
	else
		return (
			<div className="App">
				<NoAuth />
			</div>
		);
}

export default App;
