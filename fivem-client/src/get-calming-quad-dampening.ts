import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_CALMING_QUAD_DAMPENING
 *
 * 0xB0E3A058

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The calming quad index
 * @param {FloatRef} calmingQuadDampening [Ref]
 * @returns {boolean}  Returns true on success. Dampening value is undefined on failure
 */
export function getCalmingQuadDampening(waterQuad: number, calmingQuadDampening: FloatRef /* ptr */): boolean {
	const getCalmingQuadDampening_result = Citizen.invokeNative<boolean>('0xB0E3A058', waterQuad, calmingQuadDampening.dataView);
	return getCalmingQuadDampening_result;
}