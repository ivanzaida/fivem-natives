import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_OUTLINE_INDICATOR_ON_BLIP
 *
 * 0xAA090F5FC303F771

 * 
 * Highlights a blip by a cyan color circle.
 * 
 * Color can be changed with SET_BLIP_SECONDARY_COLOUR
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} show
 */
export function showOutlineIndicatorOnBlip(blip: BlipIndex, show: boolean): void {
	const showOutlineIndicatorOnBlip_result = Citizen.invokeNative<void>('0xAA090F5FC303F771', blip, show);
	return showOutlineIndicatorOnBlip_result;
}