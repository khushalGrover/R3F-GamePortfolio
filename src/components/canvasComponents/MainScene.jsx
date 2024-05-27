import { useRef, useEffect } from "react";

import {
	OrbitControls,
	OrthographicCamera,
	CameraControls,
	Stage,
	MeshReflectorMaterial,
	KeyboardControls,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import Ecctrl, { EcctrlJoystick } from "ecctrl";

import { Character } from "./Character";
import { Islands } from "./Islands";
import { Boats } from "./Boats";

export const MainScene = () => {
	const keyboardMap = [
		{ name: "forward", keys: ["ArrowUp", "KeyW"] },
		{ name: "backward", keys: ["ArrowDown", "KeyS"] },
		{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
		{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
		{ name: "jump", keys: ["Space"] },
		{ name: "run", keys: ["Shift"] },
	];
	
	return (
		<>
			<Stage environment="city" intensity={1}>
				{/* <ambientLight intensity={0.5} /> */}
			</Stage>
			{/* <CameraControls ref={cameraControlsRef} orthographic /> */}
			{/* WATER */}
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
				<planeGeometry args={[100, 100]} />
				<MeshReflectorMaterial
					blur={[50, 50]}
					resolution={1024}
					mixBlur={1}
					mixContrast={2}
					mixStrength={0.3}
					roughness={1.2}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color="#0078c8"
					matalness={1}
				/>
			</mesh>

			<Physics timeStep="vary">
				<KeyboardControls map={keyboardMap}>
					<Ecctrl disableFollowCam={false}>
						{/* <Gltf castShadow receiveShadow scale={0.315} position={[0, -0.55, 0]} src="/ghost_w_tophat-transformed.glb" /> */}

						{/* PLAYER CUBE */}
						<Character
							position={[0, -0.9, 0]}
							rotation={[0, Math.PI, 0]}
						/>
					</Ecctrl>
				</KeyboardControls>
				<RigidBody type="fixed" colliders="trimesh">
					<Islands position={[0, 0, 0]} scale={1} />
					<Boats />
				</RigidBody>
			</Physics>
		</>
	);
};
