import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const Character = forwardRef((props, ref) => {
	const { nodes, materials } = useGLTF("./models/Character.gltf");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh geometry={nodes.Sphere007.geometry}>
				<meshNormalMaterial />
			</mesh>
			<mesh geometry={nodes.Sphere007_1.geometry}>
				<meshNormalMaterial />
			</mesh>
		</group>
	);
});

useGLTF.preload("./models/Character.gltf");

export { Character };
