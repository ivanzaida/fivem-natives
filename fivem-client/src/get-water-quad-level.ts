import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WATER_QUAD_LEVEL
 *
 * 0X6523816B

 * level is defined as "z" in water.xml
 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The returned water quad level
 * @param {FloatRef} waterQuadLevel [Ref]
 * @returns {boolean}  Returns true on success. Level is undefined on failure
 */
export function getWaterQuadLevel(waterQuad: number, waterQuadLevel: FloatRef /* ptr */): boolean {
	const getWaterQuadLevel_result = Citizen.invokeNative<boolean>('0X6523816B', waterQuad, waterQuadLevel.dataView);
	return getWaterQuadLevel_result;
}