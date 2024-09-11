/**
 * CFX:GET_WAVE_QUAD_COUNT
 *
 * 0X9250C76

 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the amount of wave quads loaded.
 */
export function getWaveQuadCount(): number {
	const getWaveQuadCount_result = Citizen.invokeNative<number>('0X9250C76', );
	return getWaveQuadCount_result;
}