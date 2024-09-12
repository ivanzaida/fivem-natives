/**
 * CFX:SET_WATER_QUAD_TYPE
 *
 * 0X50131EB2

 * This native allows you to update the water quad type.Valid type definitions: 0 Square 1 Right triangle where the 90 degree angle is at maxX, minY 2 Right triangle where the 90 degree angle is at minX, minY 3 Right triangle where the 90 degree angle is at minX, maxY 4 Right triangle where the 90 degree angle is at maxY, maxY
 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {number} type The water quad type
 * @returns {boolean}  Returns true on success.
 */
export function setWaterQuadType(waterQuad: number, type: number): boolean {
	const setWaterQuadType_result = Citizen.invokeNative<boolean>('0X50131EB2', waterQuad, type);
	return setWaterQuadType_result;
}