import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_COLOUR
 *
 * 0x61183D6239A9D7B8

 * 
 * https://gtaforums.com/topic/864881-all-blip-color-ids-pictured/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} colour
 */
export function setBlipColour(blip: BlipIndex, colour: number): void {
	const setBlipColour_result = Citizen.invokeNative<void>('0x61183D6239A9D7B8', blip, colour);
	return setBlipColour_result;
}