/**
 * CFX:SET_WATER_QUAD_IS_INVISIBLE
 *
 * 0xA387D917

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {boolean} isInvisible Unknown effect
 * @returns {boolean}  Returns true on success.
 */
export function setWaterQuadIsInvisible(waterQuad: number, isInvisible: boolean): boolean {
	const setWaterQuadIsInvisible_result = Citizen.invokeNative<boolean>('0xA387D917', waterQuad, isInvisible);
	return setWaterQuadIsInvisible_result;
}