import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import * as THREE from "three";
import { Circle } from "./Curve";
import { Train } from "./Train";
const NUM_CUBES = 1; // Number of cubes in the train
const CUBE_SPACING = 0.1; // Spacing between cubes

function AnimatedCubes({ curve }) {
	const cubeRefs = useRef(
		new Array(NUM_CUBES).fill().map(() => React.createRef())
	);
	const [curveLength, setCurveLength] = useState(0);

	useEffect(() => {
		if (curve) {
			setCurveLength(curve.getLength());
		}
	}, [curve]);

	useFrame(({ clock }) => {
		if (curve) {
			const time = clock.getElapsedTime();

			cubeRefs.current.forEach((cubeRef, index) => {
				const t =
					((time + index * CUBE_SPACING) % curveLength) / curveLength; // Calculate the normalized time with offset
				const position = curve.getPointAt(t); // Get the position on the curve
				const tangent = curve.getTangentAt(t); // Get the tangent at the position

				if (cubeRef.current) {
					// Update the cube's position
					cubeRef.current.position.copy(position);

					// Update the cube's rotation to align with the tangent
					const axis = new THREE.Vector3(0, 1, 0); // Assuming the curve lies in the XZ plane
					const up = new THREE.Vector3(0, 1, 0);
					const quaternion =
						new THREE.Quaternion().setFromUnitVectors(
							up,
							tangent.clone().normalize()
						);
					cubeRef.current.quaternion.copy(quaternion);
				}
			});
		}
	});

	return (
		<>
			{cubeRefs.current.map((cubeRef, index) => (
				<>
					<mesh key={index} ref={cubeRef}>
						<boxGeometry args={[0.1, 0.1, 0.1]} />
						<meshStandardMaterial
							color={`hsl(${
								(index * 360) / NUM_CUBES
							}, 100%, 50%)`}
						/>
                         <Train/>  
					</mesh>
                            
				</>
			))}
		</>
	);
}

function CurveS() {
	const lineRef = useRef();
	const [curve, setCurve] = useState();

	useEffect(() => {
		const newCurve = Circle();
		setCurve(newCurve);

		if (lineRef.current) {
			const curvePoints = newCurve.getPoints(100);
			lineRef.current.geometry.setFromPoints(curvePoints);
		}
	}, []);

	return (
		<>
			<group>
				<line ref={lineRef}>
					<bufferGeometry />
					<lineBasicMaterial color={0x00ff00} />
				</line>
				{curve && <AnimatedCubes curve={curve} />}
			</group>
			<directionalLight intensity={3} position={[-10, 10, 10]} />
			<ambientLight intensity={3} color={0x003973} />
		</>
	);
}

export const CurveScene = () => {
	return (
		<Canvas camera={{ position: [2, 2, 4], fov: 40 }}>
			<CurveS />
			<OrbitControls />
			<Stats />
		</Canvas>
	);
};

export default CurveScene;
