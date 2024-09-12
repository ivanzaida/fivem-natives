import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WATER_QUAD_ALPHA
 *
 * 0X14088095

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {IntRef} a0 The a0 level [Ref]
 * @param {IntRef} a1 The a1 level [Ref]
 * @param {IntRef} a2 The a2 level [Ref]
 * @param {IntRef} a3 The a3 level [Ref]
 * @returns {boolean}  Returns true on success. Alpha values are undefined on failure
 */
export function getWaterQuadAlpha(waterQuad: number, a0: IntRef /* ptr */, a1: IntRef /* ptr */, a2: IntRef /* ptr */, a3: IntRef /* ptr */): boolean {
	const getWaterQuadAlpha_result = Citizen.invokeNative<boolean>('0X14088095', waterQuad, a0.dataView, a1.dataView, a2.dataView, a3.dataView);
	return getWaterQuadAlpha_result;
}