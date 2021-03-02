import React from "react";
import styled from "styled-components";
import { Icon, DropdownSection, Heading, HeadingLink, LinkList } from "./Components";
import { Link } from "react-router-dom";

const AboutDropdownEl = styled.div`
	width: 12rem;
`;

const Flex = styled.div`
	display: flex;
	> div:first-of-type {
		margin-right: 48px;
	}
`;

const HomeDropdown = () => {
	return (
		<AboutDropdownEl>
		</AboutDropdownEl>);


};

export default HomeDropdown;
