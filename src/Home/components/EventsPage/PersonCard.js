import React from "react";

export const PersonCard = ({ person }) => {
	return (
		<div className="pcard">
			<img src={person.img} alt="person" />
			<div>
				<h4 className="font-acme">{person.name}</h4>
				<h5 className="font-acme" style={{ color: "var(--dark-blue)" }}>
					{person.designation}
				</h5>
				{person.desc && <p className="font-ubuntu">{person.desc}</p>}
			</div>
		</div>
	);
};
