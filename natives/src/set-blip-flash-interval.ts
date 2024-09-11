import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_FLASH_INTERVAL
 *
 * 0xB562F84CE9B07D89

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} timeInMilliseconds
 */
export function setBlipFlashInterval(blip: BlipIndex, timeInMilliseconds: number): void {
	const setBlipFlashInterval_result = Citizen.invokeNative<void>('0xB562F84CE9B07D89', blip, timeInMilliseconds);
	return setBlipFlashInterval_result;
}