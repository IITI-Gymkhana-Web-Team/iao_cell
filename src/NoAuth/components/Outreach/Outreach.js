import React from "react";
import { NotFound } from "../NotFound/NotFound";
import { ChemTalks } from "./ChemTalks/ChemTalks";
import { NobelLaureate } from "./NobelLaureate/NobelLaureate";
import { Nsd } from "./Nsd/Nsd";

export const Outreach = (props) => {
	const name = props.match.params.name;

	const nameToComponent = {
		nsd: <Nsd />,
		chem: <ChemTalks />,
		nobel: <NobelLaureate />,
	};

	if (Object.keys(nameToComponent).includes(props.match.params.name)) return nameToComponent[name];
	else return <NotFound />;
};
