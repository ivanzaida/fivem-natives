import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SHOW_NUMBER_ON_BLIP
 *
 * 0x5765DD63F0ECC572

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} number
 */
export function showNumberOnBlip(blip: BlipIndex, number: number): void {
	const showNumberOnBlip_result = Citizen.invokeNative<void>('0x5765DD63F0ECC572', blip, number);
	return showNumberOnBlip_result;
}