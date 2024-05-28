import * as THREE from "three";

export const Circle = () => {
	const radius = 1;
	const points = [];

	for (let i = 0; i <= 100; i++) {
		const angle = (i / 100) * 2 * Math.PI;
		points.push(
			new THREE.Vector3(
				Math.cos(angle) * radius,
				Math.sin(angle) * radius,
				0
			)
		);
	}

	const circleCurve = new THREE.CatmullRomCurve3(points);
	return circleCurve;
};

