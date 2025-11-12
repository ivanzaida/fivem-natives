/**
 * MISC:ADD_POP_MULTIPLIER_SPHERE
 *
 * 0xA0FA113A187BAF0D

 * 
 * This native is adding a zone, where you can change density settings. For example, you can add a zone on 0.0, 0.0, 0.0 with radius 900.0 and vehicleMultiplier 0.0, and you will not see any new population vehicle spawned in a radius of 900.0 from 0.0, 0.0, 0.0. Returns the id. You can have only 15 zones at the same time. You can remove zone using REMOVE_POP_MULTIPLIER_SPHERE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @param {number} pedDensity
 * @param {number} trafficDensity
 * @param {boolean} localOnly
 * @param {boolean} cameraGlobalMultiplier
 * @returns {number}  
 */
export function addPopMultiplierSphere(centerX: number, centerY: number, centerZ: number, radius: number, pedDensity: number, trafficDensity: number, localOnly: boolean, cameraGlobalMultiplier: boolean = true): number {
	const addPopMultiplierSphere_result = Citizen.invokeNative<number>('0xA0FA113A187BAF0D', centerX, centerY, centerZ, radius, pedDensity, trafficDensity, localOnly, cameraGlobalMultiplier);
	return addPopMultiplierSphere_result;
}