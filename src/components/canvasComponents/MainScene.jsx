import {
	OrbitControls,
	OrthographicCamera,
	Stage,
	MeshReflectorMaterial,
	KeyboardControls,
} from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import Controller from "ecctrl";
import Ecctrl from "ecctrl";
import { ProjectIsland } from "./ProjectIsland";
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

			<Physics  timeStep="vary">
				<KeyboardControls map={keyboardMap}>
					<Ecctrl>
						{/* <Gltf castShadow receiveShadow scale={0.315} position={[0, -0.55, 0]} src="/ghost_w_tophat-transformed.glb" /> */}

						{/* PLAYER CUBE */}
						<mesh scale={[0.6, 1.2, 0.6]} position={[0, 0, 0]}>
							<boxGeometry />
							<meshNormalMaterial />

							<mesh
								scale={[1, 0.1, 0.2]}
								position={[0, 0.4, 0.6]}
							>
								<boxGeometry />
								<meshStandardMaterial />
							</mesh>
						</mesh>
					</Ecctrl>
				</KeyboardControls>
				<RigidBody type="fixed" colliders="trimesh">
					{/* <Gltf castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} scale={0.11} src="/fantasy_game_inn2-transformed.glb" /> */}

					{/* WATER */}
					<mesh
						rotation={[-Math.PI / 2, 0, 0]}
						position={[0, 0.5, 0]}
					>
						<planeGeometry args={[100, 100]} />
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
					<ProjectIsland position={[-50,0,0]} scale={30} />
				</RigidBody>
			</Physics>
		</>
	);
};
