import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_TICK_ON_BLIP
 *
 * 0x80595F890177CB50

 * 
 * Adds a green checkmark on top of a blip.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} showTick
 */
export function showTickOnBlip(blip: BlipIndex, showTick: boolean): void {
	const showTickOnBlip_result = Citizen.invokeNative<void>('0x80595F890177CB50', blip, showTick);
	return showTickOnBlip_result;
}