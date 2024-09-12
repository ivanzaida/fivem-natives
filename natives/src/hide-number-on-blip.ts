import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:HIDE_NUMBER_ON_BLIP
 *
 * 0x2E229E178F36A415

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 */
export function hideNumberOnBlip(blip: BlipIndex): void {
	const hideNumberOnBlip_result = Citizen.invokeNative<void>('0x2E229E178F36A415', blip);
	return hideNumberOnBlip_result;
}