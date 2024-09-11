import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_SCALE
 *
 * 0x5D3946F818C6B331

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} scale
 */
export function setBlipScale(blip: BlipIndex, scale: number): void {
	const setBlipScale_result = Citizen.invokeNative<void>('0x5D3946F818C6B331', blip, scale);
	return setBlipScale_result;
}