import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:IS_BLIP_SHORT_RANGE
 *
 * 0xFA7642FA8EE73EEE

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {boolean}  
 */
export function isBlipShortRange(blip: BlipIndex): boolean {
	const isBlipShortRange_result = Citizen.invokeNative<boolean>('0xFA7642FA8EE73EEE', blip);
	return isBlipShortRange_result;
}