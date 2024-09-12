import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_SHORT_HEIGHT_THRESHOLD
 *
 * 0x3E0E9367127283D7

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} useShortHeightThreshold
 */
export function setBlipShortHeightThreshold(blip: BlipIndex, useShortHeightThreshold: boolean): void {
	const setBlipShortHeightThreshold_result = Citizen.invokeNative<void>('0x3E0E9367127283D7', blip, useShortHeightThreshold);
	return setBlipShortHeightThreshold_result;
}