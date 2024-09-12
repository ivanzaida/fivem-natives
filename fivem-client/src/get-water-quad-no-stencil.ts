import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WATER_QUAD_NO_STENCIL
 *
 * 0x6F4ACBA

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {IntRef} noStencil [Ref]
 * @returns {boolean}  Returns if the given water quad has no stencil.
 */
export function getWaterQuadNoStencil(waterQuad: number, noStencil: IntRef /* ptr */): boolean {
	const getWaterQuadNoStencil_result = Citizen.invokeNative<boolean>('0x6F4ACBA', waterQuad, noStencil.dataView);
	return getWaterQuadNoStencil_result;
}