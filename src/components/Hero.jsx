// Hero.jsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { MainScene } from "./MainScene";
import "../App.css";

export function Hero() {

	return (
		<div className="h-full w-full">
			
				<Canvas
					shadows
					
					camera={{ position: [20, 20, 20], fov: 35  }}
					
					className="canvas"
				>
					<color attach="background" args={["#0078c8"]} />
					<fog attach="fog" args={["#0078c8", 0, 15]} />
					<MainScene  />
				</Canvas>
				<Loader />
			
		</div>
	);
}
