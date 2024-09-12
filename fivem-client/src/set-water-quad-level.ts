/**
 * CFX:SET_WATER_QUAD_LEVEL
 *
 * 0x6292F7A8

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {number} level The water level inside the water quad
 * @returns {boolean}  Returns true on success.
 */
export function setWaterQuadLevel(waterQuad: number, level: number): boolean {
	const setWaterQuadLevel_result = Citizen.invokeNative<boolean>('0x6292F7A8', waterQuad, level);
	return setWaterQuadLevel_result;
}