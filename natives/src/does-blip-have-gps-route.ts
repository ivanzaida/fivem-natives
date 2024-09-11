import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:DOES_BLIP_HAVE_GPS_ROUTE
 *
 * 0x6308A5C1C94EABC0

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @returns {boolean}  
 */
export function doesBlipHaveGpsRoute(blip: BlipIndex): boolean {
	const doesBlipHaveGpsRoute_result = Citizen.invokeNative<boolean>('0x6308A5C1C94EABC0', blip);
	return doesBlipHaveGpsRoute_result;
}