import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:IS_BLIP_FLASHING
 *
 * 0x4B889DE2DAC956DB

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {boolean}  
 */
export function isBlipFlashing(blip: BlipIndex): boolean {
	const isBlipFlashing_result = Citizen.invokeNative<boolean>('0x4B889DE2DAC956DB', blip);
	return isBlipFlashing_result;
}