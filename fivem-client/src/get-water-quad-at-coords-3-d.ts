/**
 * CFX:GET_WATER_QUAD_AT_COORDS_3D
 *
 * 0XF8E03DB8

 * This alternative implementation of [`GetWaterQuadAtCoords`](#_0x17321452) also checks the height of the water level.
 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate
 * @param {number} y The Y coordinate
 * @param {number} z The water level inside the water quad
 * @returns {number}  The water quad index at the given position. Returns -1 if there isn't any there. Also returns -1 if the given point is above the water level.
 */
export function getWaterQuadAtCoords_3D(x: number, y: number, z: number): number {
	const getWaterQuadAtCoords_3D_result = Citizen.invokeNative<number>('0XF8E03DB8', x, y, z);
	return getWaterQuadAtCoords_3D_result;
}