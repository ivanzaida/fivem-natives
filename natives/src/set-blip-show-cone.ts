import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_SHOW_CONE
 *
 * 0xD5888E94B9AE2B51

 * 
 * As of b2189, the third parameter sets the color of the cone (before b2189 it was ignored). Note that it uses HUD colors, not blip colors.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} showCone
 * @param {number} hudColor
 */
export function setBlipShowCone(blip: BlipIndex, showCone: boolean, hudColor: number = 11): void {
	const setBlipShowCone_result = Citizen.invokeNative<void>('0xD5888E94B9AE2B51', blip, showCone, hudColor);
	return setBlipShowCone_result;
}