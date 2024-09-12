/**
 * CFX:GET_CALMING_QUAD_AT_COORDS
 *
 * 0X870E8B40

 * This native returns the index of a calming quad if the given point is inside its bounds.
 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 * @returns {number}  The calming quad index at the given position. Returns -1 if there isn't any there.
 */
export function getCalmingQuadAtCoords(x: number, y: number): number {
	const getCalmingQuadAtCoords_result = Citizen.invokeNative<number>('0X870E8B40', x, y);
	return getCalmingQuadAtCoords_result;
}