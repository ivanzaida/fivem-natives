/**
 * PATHFIND:GET_NUM_NAVMESHES_EXISTING_IN_AREA
 *
 * 0x758F97A0C79EEFBF

 * 
 * Returns the number of navmeshes which exist in the given area (irrespective of whether they are currently loaded or not)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 * @returns {number}  
 */
export function getNumNavmeshesExistingInArea(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): number {
	const getNumNavmeshesExistingInArea_result = Citizen.invokeNative<number>('0x758F97A0C79EEFBF', minX, minY, minZ, maxX, maxY, maxZ);
	return getNumNavmeshesExistingInArea_result;
}