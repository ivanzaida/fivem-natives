import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WATER_QUAD_HAS_LIMITED_DEPTH
 *
 * 0X22EA3BD8

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {IntRef} hasLimitedDepth [Ref]
 * @returns {boolean}  Returns if the given water quad has a limited depth.
 */
export function getWaterQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: IntRef /* ptr */): boolean {
	const getWaterQuadHasLimitedDepth_result = Citizen.invokeNative<boolean>('0X22EA3BD8', waterQuad, hasLimitedDepth.dataView);
	return getWaterQuadHasLimitedDepth_result;
}