/**
 * WATER:ADD_EXTRA_CALMING_QUAD
 *
 * 0x768916F2C61804A4

 * 
 * return the index of the quad, usefull if you need to remove just that one.
 * MAX allowed quads is 8. Let code know if that needs increasing
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minX
 * @param {number} minY
 * @param {number} maxX
 * @param {number} maxY
 * @param {number} dampening
 * @returns {number}  
 */
export function addExtraCalmingQuad(minX: number, minY: number, maxX: number, maxY: number, dampening: number): number {
	const addExtraCalmingQuad_result = Citizen.invokeNative<number>('0x768916F2C61804A4', minX, minY, maxX, maxY, dampening);
	return addExtraCalmingQuad_result;
}