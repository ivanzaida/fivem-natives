/**
 * PED:SET_PED_NON_CREATION_AREA
 *
 * 0x89C4F1335B4A6633

 * 
 * The distance between these points, is the diagonal of a box (remember it's 3D).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} minZ
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} maxZ
 */
export function setPedNonCreationArea(minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): void {
	const setPedNonCreationArea_result = Citizen.invokeNative<void>('0x89C4F1335B4A6633', minX, minY, minZ, maxX, maxY, maxZ);
	return setPedNonCreationArea_result;
}