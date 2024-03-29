import React, { useState } from "react";
import AnimatedNavbar from "./AnimatedNavbar";
import styled from "styled-components";
import "./index.css";
import "./NavBar.css";

const AppContainer = styled.div`
  background: #046092;
  display: flex;
  flex-direction: column;
  height: 60px

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`;

export const Nav = () => {
	const [state, setState] = useState({ duration: 300 });
	return (
		<AppContainer className="yolo">
			<AnimatedNavbar duration={state.duration} />
		</AppContainer>
	);
};
