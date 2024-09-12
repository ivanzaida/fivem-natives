import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WATER_QUAD_IS_INVISIBLE
 *
 * 0x1DEDBD77

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {IntRef} isInvisible [Ref]
 * @returns {boolean}  Returns if the given water quad is invisible
 */
export function getWaterQuadIsInvisible(waterQuad: number, isInvisible: IntRef /* ptr */): boolean {
	const getWaterQuadIsInvisible_result = Citizen.invokeNative<boolean>('0x1DEDBD77', waterQuad, isInvisible.dataView);
	return getWaterQuadIsInvisible_result;
}