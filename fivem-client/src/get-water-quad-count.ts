/**
 * CFX:GET_WATER_QUAD_COUNT
 *
 * 0XB1884159

 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the amount of water quads loaded.
 */
export function getWaterQuadCount(): number {
	const getWaterQuadCount_result = Citizen.invokeNative<number>('0XB1884159', );
	return getWaterQuadCount_result;
}