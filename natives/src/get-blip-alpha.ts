import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_ALPHA
 *
 * 0xF03FBAFA0284124E

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {number}  
 */
export function getBlipAlpha(blip: BlipIndex): number {
	const getBlipAlpha_result = Citizen.invokeNative<number>('0xF03FBAFA0284124E', blip);
	return getBlipAlpha_result;
}