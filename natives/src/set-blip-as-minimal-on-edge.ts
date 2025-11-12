import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_AS_MINIMAL_ON_EDGE
 *
 * 0xA446583E4503CCD9

 * 
 * Makes a blip go small when off the minimap.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {boolean} minimiseOnEdge
 */
export function setBlipAsMinimalOnEdge(blip: BlipIndex, minimiseOnEdge: boolean): void {
	const setBlipAsMinimalOnEdge_result = Citizen.invokeNative<void>('0xA446583E4503CCD9', blip, minimiseOnEdge);
	return setBlipAsMinimalOnEdge_result;
}