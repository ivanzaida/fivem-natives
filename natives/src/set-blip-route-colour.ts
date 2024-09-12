import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_ROUTE_COLOUR
 *
 * 0x032F99DF3B301AFA

 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {number} routeColour
 */
export function setBlipRouteColour(blip: BlipIndex, routeColour: number): void {
	const setBlipRouteColour_result = Citizen.invokeNative<void>('0x032F99DF3B301AFA', blip, routeColour);
	return setBlipRouteColour_result;
}