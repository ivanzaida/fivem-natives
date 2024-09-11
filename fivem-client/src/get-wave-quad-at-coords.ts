/**
 * CFX:GET_WAVE_QUAD_AT_COORDS
 *
 * 0X3F5A61A7

 * This native returns the index of a wave quad if the given point is inside its bounds.
 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 * @returns {number}  The wave quad index at the given position. Returns -1 if there isn't any there.
 */
export function getWaveQuadAtCoords(x: number, y: number): number {
	const getWaveQuadAtCoords_result = Citizen.invokeNative<number>('0X3F5A61A7', x, y);
	return getWaveQuadAtCoords_result;
}