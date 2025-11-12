import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_ALPHA
 *
 * 0xF42EBD7CD0682A8B

 * 
 * Sets alpha-channel for blip color.
 * 
 * Example:
 * 
 * Blip blip = HUD::ADD_BLIP_FOR_ENTITY(entity);
 * HUD::SET_BLIP_COLOUR(blip , 3);
 * HUD::SET_BLIP_ALPHA(blip , 64);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} alpha
 */
export function setBlipAlpha(blip: BlipIndex, alpha: number): void {
	const setBlipAlpha_result = Citizen.invokeNative<void>('0xF42EBD7CD0682A8B', blip, alpha);
	return setBlipAlpha_result;
}