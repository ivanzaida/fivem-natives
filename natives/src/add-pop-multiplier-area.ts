/**
 * MISC:ADD_POP_MULTIPLIER_AREA
 *
 * 0x6991BFCE3D87261B

 * 
 * ------------------------------------------------------------------
 * @param {number} minWSX
 * @param {number} minWSY
 * @param {number} minWSZ
 * @param {number} maxWSX
 * @param {number} maxWSY
 * @param {number} maxWSZ
 * @param {number} pedDensity
 * @param {number} trafficDensity
 * @param {boolean} localOnly
 * @param {boolean} cameraGlobalMultiplier
 * @returns {number}  
 */
export function addPopMultiplierArea(minWSX: number, minWSY: number, minWSZ: number, maxWSX: number, maxWSY: number, maxWSZ: number, pedDensity: number, trafficDensity: number, localOnly: boolean, cameraGlobalMultiplier: boolean = true): number {
	const addPopMultiplierArea_result = Citizen.invokeNative<number>('0x6991BFCE3D87261B', minWSX, minWSY, minWSZ, maxWSX, maxWSY, maxWSZ, pedDensity, trafficDensity, localOnly, cameraGlobalMultiplier);
	return addPopMultiplierArea_result;
}