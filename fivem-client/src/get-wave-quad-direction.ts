import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WAVE_QUAD_DIRECTION
 *
 * 0XCCE49A1C

 * 
 * ------------------------------------------------------------------
 * @param {number} waveQuad The wave quad index
 * @param {FloatRef} directionX The wave quad X direction [Ref]
 * @param {FloatRef} directionY The wave quad Y direction [Ref]
 * @returns {boolean}  Returns true on success. Direction values are undefined on failure
 */
export function getWaveQuadDirection(waveQuad: number, directionX: FloatRef /* ptr */, directionY: FloatRef /* ptr */): boolean {
	const getWaveQuadDirection_result = Citizen.invokeNative<boolean>('0XCCE49A1C', waveQuad, directionX.dataView, directionY.dataView);
	return getWaveQuadDirection_result;
}