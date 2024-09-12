/**
 * CFX:SET_WATER_QUAD_HAS_LIMITED_DEPTH
 *
 * 0xD1FDCFC1

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {boolean} hasLimitedDepth Unknown effect
 * @returns {boolean}  Returns true on success.
 */
export function setWaterQuadHasLimitedDepth(waterQuad: number, hasLimitedDepth: boolean): boolean {
	const setWaterQuadHasLimitedDepth_result = Citizen.invokeNative<boolean>('0xD1FDCFC1', waterQuad, hasLimitedDepth);
	return setWaterQuadHasLimitedDepth_result;
}