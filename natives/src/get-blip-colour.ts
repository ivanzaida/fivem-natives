import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_COLOUR
 *
 * 0xA247F53580E53DCE

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {number}  
 */
export function getBlipColour(blip: BlipIndex): number {
	const getBlipColour_result = Citizen.invokeNative<number>('0xA247F53580E53DCE', blip);
	return getBlipColour_result;
}