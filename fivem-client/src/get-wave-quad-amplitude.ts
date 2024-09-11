import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WAVE_QUAD_AMPLITUDE
 *
 * 0X865139A3

 * 
 * ------------------------------------------------------------------
 * @param {number} waveQuad The wave quad index
 * @param {FloatRef} waveQuadAmplitude [Ref]
 * @returns {boolean}  Returns true on success. Amplitude is undefined on failure
 */
export function getWaveQuadAmplitude(waveQuad: number, waveQuadAmplitude: FloatRef /* ptr */): boolean {
	const getWaveQuadAmplitude_result = Citizen.invokeNative<boolean>('0X865139A3', waveQuad, waveQuadAmplitude.dataView);
	return getWaveQuadAmplitude_result;
}