/**
 * MISC:ADD_TACTICAL_NAV_MESH_POINT
 *
 * 0x74057F606033EB70

 * 
 * Adds a tactical nav mesh point
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 */
export function addTacticalNavMeshPoint(positionX: number, positionY: number, positionZ: number): void {
	const addTacticalNavMeshPoint_result = Citizen.invokeNative<void>('0x74057F606033EB70', positionX, positionY, positionZ);
	return addTacticalNavMeshPoint_result;
}