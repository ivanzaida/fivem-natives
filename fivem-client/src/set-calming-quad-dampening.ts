/**
 * CFX:SET_CALMING_QUAD_DAMPENING
 *
 * 0X67977501

 * 
 * ------------------------------------------------------------------
 * @param {number} calmingQuad The calming quad
 * @param {number} dampening The dampening value
 * @returns {boolean}  Returns true on success.
 */
export function setCalmingQuadDampening(calmingQuad: number, dampening: number): boolean {
	const setCalmingQuadDampening_result = Citizen.invokeNative<boolean>('0X67977501', calmingQuad, dampening);
	return setCalmingQuadDampening_result;
}