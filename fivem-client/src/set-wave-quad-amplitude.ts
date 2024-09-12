/**
 * CFX:SET_WAVE_QUAD_AMPLITUDE
 *
 * 0XE4174B7B

 * 
 * ------------------------------------------------------------------
 * @param {number} waveQuad The wave quad index
 * @param {number} amplitude The amplitude value
 * @returns {boolean}  Returns true on success.
 */
export function setWaveQuadAmplitude(waveQuad: number, amplitude: number): boolean {
	const setWaveQuadAmplitude_result = Citizen.invokeNative<boolean>('0XE4174B7B', waveQuad, amplitude);
	return setWaveQuadAmplitude_result;
}