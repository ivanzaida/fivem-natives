import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_HEADING_INDICATOR_ON_BLIP
 *
 * 0x0C56573D93709254

 * 
 * Adds the GTA: Online player heading indicator to a blip.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} show
 */
export function showHeadingIndicatorOnBlip(blip: BlipIndex, show: boolean): void {
	const showHeadingIndicatorOnBlip_result = Citizen.invokeNative<void>('0x0C56573D93709254', blip, show);
	return showHeadingIndicatorOnBlip_result;
}