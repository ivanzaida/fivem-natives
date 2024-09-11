/**
 * PED:SET_SCENARIO_PEDS_SPAWN_IN_SPHERE_AREA
 *
 * 0x2485C562F3C50736

 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @param {number} maxPeds
 */
export function setScenarioPedsSpawnInSphereArea(centerX: number, centerY: number, centerZ: number, radius: number, maxPeds: number): void {
	const setScenarioPedsSpawnInSphereArea_result = Citizen.invokeNative<void>('0x2485C562F3C50736', centerX, centerY, centerZ, radius, maxPeds);
	return setScenarioPedsSpawnInSphereArea_result;
}