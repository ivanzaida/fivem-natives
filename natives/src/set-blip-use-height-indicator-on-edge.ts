import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_USE_HEIGHT_INDICATOR_ON_EDGE
 *
 * 0xFAE0C242A432A1F2

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} useHeight
 */
export function setBlipUseHeightIndicatorOnEdge(blip: BlipIndex, useHeight: boolean): void {
	const setBlipUseHeightIndicatorOnEdge_result = Citizen.invokeNative<void>('0xFAE0C242A432A1F2', blip, useHeight);
	return setBlipUseHeightIndicatorOnEdge_result;
}