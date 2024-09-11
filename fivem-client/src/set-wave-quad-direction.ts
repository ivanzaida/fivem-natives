/**
 * CFX:SET_WAVE_QUAD_DIRECTION
 *
 * 0XFC9341A3

 * directionX/Y should be constrained between -1.0 and 1.0A positive value will create the wave starting at min and rolling towards maxA negative value will create the wave starting at max and rolling towards minApplying both values allows you to make diagonal waves
 * 
 * ------------------------------------------------------------------
 * @param {number} waveQuad The wave quad index
 * @param {number} directionX The minX coordinate
 * @param {number} directionY The minY coordinate
 * @returns {boolean}  Returns true on success.
 */
export function setWaveQuadDirection(waveQuad: number, directionX: number, directionY: number): boolean {
	const setWaveQuadDirection_result = Citizen.invokeNative<boolean>('0XFC9341A3', waveQuad, directionX, directionY);
	return setWaveQuadDirection_result;
}