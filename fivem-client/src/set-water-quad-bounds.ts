/**
 * CFX:SET_WATER_QUAD_BOUNDS
 *
 * 0X80AD144C

 * This native allows you to update the bounds of a specified water quad index.
 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {number} minX The minX coordinate
 * @param {number} minY The minY coordinate
 * @param {number} maxX The maxX coordinate
 * @param {number} maxY The maxY coordinate
 * @returns {boolean}  Returns true on success.
 */
export function setWaterQuadBounds(waterQuad: number, minX: number, minY: number, maxX: number, maxY: number): boolean {
	const setWaterQuadBounds_result = Citizen.invokeNative<boolean>('0X80AD144C', waterQuad, minX, minY, maxX, maxY);
	return setWaterQuadBounds_result;
}