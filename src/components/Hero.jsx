// Hero.jsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./Experience";
import "../App.css";

export function Hero() {

	return (
		<div className="h-full w-full">
			
				<Canvas
					shadows
					camera={{ position: [40, 0, 60], fov: 35 }}
					className="canvas"
				>
					<color attach="background" args={["#0078c8"]} />
					<fog attach="fog" args={["#0078c8", 0, 15]} />
					<Experience  />
				</Canvas>
				<Loader />
			
		</div>
	);
}
