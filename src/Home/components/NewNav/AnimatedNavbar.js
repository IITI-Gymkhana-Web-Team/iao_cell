import React, { Component } from "react";
import Navbar from "./Navbar";
import NavbarItem from "./Navbar/NavbarItem";
import { Flipper } from "react-flip-toolkit";
import DropdownContainer from "./DropdownContainer";
import OpportunitiesDropdown from "./DropdownContents/OpportunitiesDropdown";
import AboutDropdown from "./DropdownContents/AboutDropdown";
import PeopleDropdown from "./DropdownContents/PeopleDropdown";
import CommitteeDropdown from "./DropdownContents/CommitteeDropdown";
import CollaborationsDropdown from "./DropdownContents/CollaborationsDropdown";
import ResearchDropdown from "./DropdownContents/ResearchDropdown";
import PsDropdown from "./DropdownContents/PsDropdown";
import OutreachDropdown from "./DropdownContents/OutreachDropdown";
import ContactDropdown from "./DropdownContents/ContactDropdown";
import FacilitiesDropdown from "./DropdownContents/FacilitiesDropdown";

const navbarConfig = [
	{ href: "/", title: "Home", dropdown: AboutDropdown },
	{ href: "#", title: "People", dropdown: PeopleDropdown },
	{ href: "#", title: "Committees", dropdown: CommitteeDropdown },
	{ href: "#", title: "Collaborations", dropdown: CollaborationsDropdown },
	{ href: "#", title: "Prospective", dropdown: PsDropdown },
	{ href: "#", title: "Opportunities", dropdown: OpportunitiesDropdown },
	{ href: "#", title: "Outreach", dropdown: OutreachDropdown },
	{ href: "#", title: "Research", dropdown: ResearchDropdown },
	{ href: "#", title: "Facilities", dropdown: FacilitiesDropdown },
	{ href: "/contact", title: "Contact", dropdown: ContactDropdown },
];

let nodrop = [0, 9];

export default class AnimatedNavbar extends Component {
	state = {
		activeIndices: [],
	};

	resetDropdownState = (i) => {
		this.setState({
			activeIndices: typeof i === "number" ? [i] : [],
			animatingOut: false,
		});
		delete this.animatingOutTimeout;
	};

	onMouseEnter = (i) => {
		if (this.animatingOutTimeout) {
			clearTimeout(this.animatingOutTimeout);
			this.resetDropdownState(i);
			return;
		}
		if (this.state.activeIndices[this.state.activeIndices.length - 1] === i) return;

		this.setState((prevState) => ({
			activeIndices: prevState.activeIndices.concat(i),
			animatingOut: false,
		}));
	};

	onMouseLeave = () => {
		this.setState({
			animatingOut: true,
		});
		this.animatingOutTimeout = setTimeout(this.resetDropdownState, this.props.duration);
	};

	render() {
		const { duration } = this.props;
		let CurrentDropdown;
		let PrevDropdown;
		let direction;

		const currentIndex = this.state.activeIndices[this.state.activeIndices.length - 1];
		const prevIndex =
			this.state.activeIndices.length > 1 &&
			this.state.activeIndices[this.state.activeIndices.length - 2];

		if (typeof currentIndex === "number") CurrentDropdown = navbarConfig[currentIndex].dropdown;
		if (typeof prevIndex === "number") {
			PrevDropdown = navbarConfig[prevIndex].dropdown;
			direction = currentIndex > prevIndex ? "right" : "left";
		}

		return (
			<Flipper
				flipKey={currentIndex}
				spring={duration === 300 ? "noWobble" : { stiffness: 10, damping: 10 }}
			>
				<Navbar onMouseLeave={this.onMouseLeave}>
					{navbarConfig.map((n, index) => {
						return (
							<NavbarItem
								key={n.title}
								href={n.href}
								title={n.title}
								index={index}
								onMouseEnter={this.onMouseEnter}
							>
								{currentIndex === index &&
									(nodrop.indexOf(currentIndex) != -1 ? (
										<div style={{ visibility: "hidden" }}>
											<DropdownContainer
												direction={direction}
												animatingOut={this.state.animatingOut}
												duration={duration}
											>
												<CurrentDropdown />
												{PrevDropdown && <PrevDropdown />}
											</DropdownContainer>
										</div>
									) : (
										<div>
											<DropdownContainer
												direction={direction}
												animatingOut={this.state.animatingOut}
												duration={duration}
											>
												<CurrentDropdown />
												{PrevDropdown && <PrevDropdown />}
											</DropdownContainer>
										</div>
									))}
							</NavbarItem>
						);
					})}
				</Navbar>
			</Flipper>
		);
	}
}
