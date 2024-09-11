import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:IS_BLIP_ON_MINIMAP
 *
 * 0xE38FA95DFF747E7C

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {boolean}  
 */
export function isBlipOnMinimap(blip: BlipIndex): boolean {
	const isBlipOnMinimap_result = Citizen.invokeNative<boolean>('0xE38FA95DFF747E7C', blip);
	return isBlipOnMinimap_result;
}