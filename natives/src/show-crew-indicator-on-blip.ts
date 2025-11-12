import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_CREW_INDICATOR_ON_BLIP
 *
 * 0x65195BC76F41B298

 * 
 * Enables or disables the blue half circle https://i.imgur.com/iZes9Ec.png around the specified blip on the left side of the blip. This is used to indicate that the player is in your crew in GTA:O. Color is changeable by using `SET_BLIP_SECONDARY_COLOUR`.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} show
 */
export function showCrewIndicatorOnBlip(blip: BlipIndex, show: boolean): void {
	const showCrewIndicatorOnBlip_result = Citizen.invokeNative<void>('0x65195BC76F41B298', blip, show);
	return showCrewIndicatorOnBlip_result;
}