import {
	OrbitControls,
	Stage,
	MeshReflectorMaterial,
} from "@react-three/drei";

export const Experience = () => {
	return (
		<>
			<Stage environment="city" intensity={1} >
				<OrbitControls
					makeDefault
					minPolarAngle={0}
					maxPolarAngle={Math.PI / 2}
					minDistance={1}
					maxDistance={2}
				/>
				{/* <ambientLight intensity={0.5} /> */}
				<mesh scale={1} position={[0,0,0]} >
					<boxGeometry />
					<meshStandardMaterial />
				</mesh>
			</Stage>
			
			<mesh scale={1} position={[0,0,0]} >
					<boxGeometry />
					<meshStandardMaterial />
				</mesh>
			{/* WATER */}
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]}>
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
		</>
	);
};
