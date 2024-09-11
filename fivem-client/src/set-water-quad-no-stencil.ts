/**
 * CFX:SET_WATER_QUAD_NO_STENCIL
 *
 * 0XC3FF42FF

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {boolean} noStencil Unknown effect
 * @returns {boolean}  Returns true on success.
 */
export function setWaterQuadNoStencil(waterQuad: number, noStencil: boolean): boolean {
	const setWaterQuadNoStencil_result = Citizen.invokeNative<boolean>('0XC3FF42FF', waterQuad, noStencil);
	return setWaterQuadNoStencil_result;
}