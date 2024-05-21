import React from "react";
import "./menu.css"; // Import menu.css file
import Button from "./Button"; // Import your custom Button component

export function Menu() {
	const MenuItem = ({ color, icon, label, children }) => {
		return (
			<li className={`${color} relative`}>
				<img src={icon} alt="icon" />
				{label && <DropDownList>{label}</DropDownList>}
				{children}
			</li>
		);
	};

	function DropDownList({ children }) {
		if (!Array.isArray(children)) {
			children = [children];
		}

		return (
			<ul className="h-[250px]">
				{children.map((item, index) => (
					<li key={index}>
						<Button variant="">{item}</Button>
						{/* {item} */}
					</li>
				))}
			</ul>
		);
	}

	return (
		<nav id="colorNav" className="flex justify-center mt-10">
			<ul className="menuItems">
				<MenuItem
					color="red"
					icon="./Icon/chair-arm.png"
					label={["None", "Classic Arm", "Modern Arm", "Royal Arm"]}
				/>
				<MenuItem
					color="blue"
					icon="./Icon/chair-back.png"
					label={[
						"None",
						"Classic Back",
						"Modern Back",
						"Royal Back",
					]}
				/>
				<MenuItem
					color="purple"
					icon="./Icon/chair-cushion.png"
					label={[
						"None",
						"Classic cushion",
						"Modern cushion",
						"Royal cushion",
					]}
				/>
				<MenuItem
					color="green"
					icon="./Icon/chair-legs.png"
					label={["Classic Legs", "Modern Legs", "Royal Legs"]}
				/>
				<MenuItem
					color="orange"
					icon="./Icon/chair-cushion.png"
					label={["Classic seat", "Modern seat", "Royal seat"]}
				/>
				<MenuItem
					color="yellow"
					icon="./Icon/chair.png"
					label={["Classic set", "Modern set", "Royal set"]}
				/>
			</ul>
		</nav>
	);
}
