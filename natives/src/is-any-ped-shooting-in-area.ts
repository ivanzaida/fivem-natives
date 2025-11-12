/**
 * PED:IS_ANY_PED_SHOOTING_IN_AREA
 *
 * 0x68C0C5563ECBBAB6

 * 
 * PARAM NOTES :Default value is a 3D locate
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 * @param {boolean} highlightArea
 * @param {boolean} do3DCheck
 * @returns {boolean}  
 */
export function isAnyPedShootingInArea(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number, highlightArea: boolean, do3DCheck: boolean = true): boolean {
	const isAnyPedShootingInArea_result = Citizen.invokeNative<boolean>('0x68C0C5563ECBBAB6', minX, minY, minZ, maxX, maxY, maxZ, highlightArea, do3DCheck);
	return isAnyPedShootingInArea_result;
}