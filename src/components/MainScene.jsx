import {
	OrbitControls,
	OrthographicCamera,
	Stage,
	MeshReflectorMaterial,
	KeyboardControls,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import Controller from "ecctrl";

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
				<mesh scale={1} position={[0, 0, 0]} visible={false}>
					<boxGeometry />
					<meshStandardMaterial />
				</mesh>
			</Stage>

			<Physics debug timeStep="vary">
				<KeyboardControls map={keyboardMap}>
					<Controller maxVelLimit={5}>
						{/* <Gltf castShadow receiveShadow scale={0.315} position={[0, -0.55, 0]} src="/ghost_w_tophat-transformed.glb" /> */}

						{/* PLAYER CUBE */}
						<mesh scale={[0.5, 1, 0.5]} position={[0, 0, 0]}>
							<boxGeometry />
							<meshNormalMaterial />

							<mesh
								scale={[0.2, 0.1, 0.5]}
								position={[0, 0, 0.6]}
							>
								<boxGeometry />
								<meshStandardMaterial />
							</mesh>
						</mesh>
					</Controller>
				</KeyboardControls>
				<RigidBody type="fixed" colliders="trimesh">
					{/* <Gltf castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={0.11} src="/fantasy_game_inn2-transformed.glb" /> */}

					{/* WATER */}
					<mesh
						rotation={[-Math.PI / 2, 0, 0]}
						position={[0, 0.5, 0]}
					>
						<planeGeometry args={[50, 50]} />
						<MeshReflectorMaterial
							blur={[400, 400]}
							resolution={1024}
							mixBlur={0.5}
							mixStrength={0.5}
							roughness={1}
							depthScale={1.2}
							minDepthThreshold={0.4}
							maxDepthThreshold={1.4}
							color="#0078c8"
							matalness={0.4}
						/>
					</mesh>
				</RigidBody>
			</Physics>
		</>
	);
};
