import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_SECONDARY_COLOUR
 *
 * 0x40B5D81DD20A370B

 * 
 * Can be used to give blips any RGB colour with SET_BLIP_COLOUR(blip, 84).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
export function setBlipSecondaryColour(blip: BlipIndex, r: number, g: number = 0, b: number = 0): void {
	const setBlipSecondaryColour_result = Citizen.invokeNative<void>('0x40B5D81DD20A370B', blip, r, g, b);
	return setBlipSecondaryColour_result;
}