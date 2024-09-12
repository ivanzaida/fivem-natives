import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:DOES_BLIP_EXIST
 *
 * 0xC450B06E5AAA0985

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {boolean}  
 */
export function doesBlipExist(blip: BlipIndex): boolean {
	const doesBlipExist_result = Citizen.invokeNative<boolean>('0xC450B06E5AAA0985', blip);
	return doesBlipExist_result;
}