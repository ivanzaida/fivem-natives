import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:START_GPS_MULTI_ROUTE
 *
 * 0x71D40AB8CFA59157

 * 
 * Initialises the GPS to calculate a route using the road nodes & passing through multiple waypoints, one after the other
 * The route between each given waypoint will be the shortest available using roads
 * 
 * Starts a new GPS multi-route, allowing you to create custom GPS paths.
 * GPS functions like the waypoint, except it can contain multiple points it's forced to go through.
 * Once the player has passed a point, the GPS will no longer force its path through it.
 * 
 * Works independently from the player-placed waypoint and blip routes.
 * Example result: https://i.imgur.com/ZZHQatX.png
 * hudColor: The HUD color of the GPS path.
 * routeFromPlayer: Makes the GPS draw a path from the player to the next point, rather than the original path from the previous point.
 * displayOnFoot: Draws the GPS path regardless if the player is in a vehicle or not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} colour
 * @param {boolean} trackPlayer
 * @param {boolean} onFoot
 */
export function startGpsMultiRoute(colour: EHudColours | number, trackPlayer: boolean = true, onFoot: boolean = false): void {
	const startGpsMultiRoute_result = Citizen.invokeNative<void>('0x71D40AB8CFA59157', colour, trackPlayer, onFoot);
	return startGpsMultiRoute_result;
}