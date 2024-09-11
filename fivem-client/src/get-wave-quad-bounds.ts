import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WAVE_QUAD_BOUNDS
 *
 * 0XF86136DB

 * 
 * ------------------------------------------------------------------
 * @param {number} waveQuad The wave quad index
 * @param {IntRef} minX The minX coordinate [Ref]
 * @param {IntRef} minY The minY coordinate [Ref]
 * @param {IntRef} maxX The maxX coordinate [Ref]
 * @param {IntRef} maxY The maxY coordinate [Ref]
 * @returns {boolean}  Returns true on success. Bounds are undefined on failure
 */
export function getWaveQuadBounds(waveQuad: number, minX: IntRef /* ptr */, minY: IntRef /* ptr */, maxX: IntRef /* ptr */, maxY: IntRef /* ptr */): boolean {
	const getWaveQuadBounds_result = Citizen.invokeNative<boolean>('0XF86136DB', waveQuad, minX.dataView, minY.dataView, maxX.dataView, maxY.dataView);
	return getWaveQuadBounds_result;
}