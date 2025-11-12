import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_FLASH_TIMER
 *
 * 0x8D777E1B885E428C

 * 
 * Adds up after viewing multiple R scripts. I believe that the duration is in miliseconds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} timeInMilliseconds
 */
export function setBlipFlashTimer(blip: BlipIndex, timeInMilliseconds: number): void {
	const setBlipFlashTimer_result = Citizen.invokeNative<void>('0x8D777E1B885E428C', blip, timeInMilliseconds);
	return setBlipFlashTimer_result;
}