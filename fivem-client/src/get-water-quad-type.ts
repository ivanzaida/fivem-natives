import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WATER_QUAD_TYPE
 *
 * 0xE2501B8B

 * Valid type definitions: 0 Square 1 Right triangle where the 90 degree angle is at maxX, minY 2 Right triangle where the 90 degree angle is at minX, minY 3 Right triangle where the 90 degree angle is at minX, maxY 4 Right triangle where the 90 degree angle is at maxY, maxY
 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {IntRef} waterType [Ref]
 * @returns {boolean}  Returns true on success. Type is undefined on failure
 */
export function getWaterQuadType(waterQuad: number, waterType: IntRef /* ptr */): boolean {
	const getWaterQuadType_result = Citizen.invokeNative<boolean>('0xE2501B8B', waterQuad, waterType.dataView);
	return getWaterQuadType_result;
}