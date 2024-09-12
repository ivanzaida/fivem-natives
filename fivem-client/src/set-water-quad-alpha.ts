/**
 * CFX:SET_WATER_QUAD_ALPHA
 *
 * 0XF49797EB

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {number} a0 The a0 level
 * @param {number} a1 The a1 level
 * @param {number} a2 The a2 level
 * @param {number} a3 The a3 level
 * @returns {boolean}  Returns true on success.
 */
export function setWaterQuadAlpha(waterQuad: number, a0: number, a1: number, a2: number, a3: number): boolean {
	const setWaterQuadAlpha_result = Citizen.invokeNative<boolean>('0XF49797EB', waterQuad, a0, a1, a2, a3);
	return setWaterQuadAlpha_result;
}