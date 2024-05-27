// Hero.jsx
import React, { useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { MainScene } from "./canvasComponents/MainScene";
import "../App.css";
import Overlay from "./Overlay";

export function Hero() {

	return (
		<div className="static h-full w-full">

				<Overlay />
				
				
				<Canvas
					shadows
					
					camera={ { position: [20, 20, 20], fov: 35  }}
					
					className="canvas"
				>
					<color attach="background" args={["#0078c8"]} />
					<fog attach="fog" args={["#0078c8", 0, 150]} />
					<MainScene  />
					<mesh>
						<boxGeometry args={[1, 1, 1]} />
						<meshNormalMaterial />
					</mesh>
				</Canvas>
				<Loader />
			
		</div>
	);
}
