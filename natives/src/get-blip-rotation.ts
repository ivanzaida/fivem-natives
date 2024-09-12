import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_ROTATION
 *
 * 0x350EDDA8A9A3C23D

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {number}  
 */
export function getBlipRotation(blip: BlipIndex): number {
	const getBlipRotation_result = Citizen.invokeNative<number>('0x350EDDA8A9A3C23D', blip);
	return getBlipRotation_result;
}