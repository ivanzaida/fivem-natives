/**
 * CFX:GET_WATER_QUAD_AT_COORDS
 *
 * 0X17321452

 * This native returns the index of a water quad if the given point is inside its bounds.If you also want to check for water level, check out [`GetWaterQuadAtCoords_3d`](#_0xF8E03DB8)
 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 * @returns {number}  The water quad index at the given position. Returns -1 if there isn't any there.
 */
export function getWaterQuadAtCoords(x: number, y: number): number {
	const getWaterQuadAtCoords_result = Citizen.invokeNative<number>('0X17321452', x, y);
	return getWaterQuadAtCoords_result;
}