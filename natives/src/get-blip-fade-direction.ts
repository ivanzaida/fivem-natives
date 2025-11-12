import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_FADE_DIRECTION
 *
 * 0x0857F7FF8AA07F67

 * 
 * Returns -1, 0, +1, depending on if the blip is fading out, doing nothing, or fading in respectively.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {number}  
 */
export function getBlipFadeDirection(blip: BlipIndex): number {
	const getBlipFadeDirection_result = Citizen.invokeNative<number>('0x0857F7FF8AA07F67', blip);
	return getBlipFadeDirection_result;
}