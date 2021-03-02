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

            <DropdownSection>
                <ul>
                    <HeadingLink>
                        <Link to="/">
                            <Icon /> Home
						</Link>
                    </HeadingLink>
                    <HeadingLink noMarginBottom>
                        <Link to="/Aboutiiti">
                            <Icon /> About IITI
						</Link>
                    </HeadingLink>
                </ul>
            </DropdownSection>
        </AboutDropdownEl>
    );
};

export default HomeDropdown;
