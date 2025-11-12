import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:START_GPS_CUSTOM_ROUTE
 *
 * 0xCCF5B38438599377

 * 
 * This command will start a custom GPS route, clearing any previous custom route or race track.
 * Note that useage of custom route & race-track are mutually exclusive - you cannot use both at same time.
 * 
 * Starts a new GPS custom-route, allowing you to plot lines on the map.
 * Lines are drawn directly between points.
 * The GPS custom route works like the GPS multi route, except it does not follow roads.
 * Example result: https://i.imgur.com/BDm5pzt.png
 * hudColor: The HUD color of the GPS path.
 * displayOnFoot: Draws the path regardless if the player is in a vehicle or not.
 * followPlayer: Draw the path partially between the previous and next point based on the players position between them. When false, the GPS appears to not disappear after the last leg is completed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} colour
 * @param {boolean} onFoot
 * @param {boolean} inVehicle
 */
export function startGpsCustomRoute(colour: EHudColours | number, onFoot: boolean, inVehicle: boolean): void {
	const startGpsCustomRoute_result = Citizen.invokeNative<void>('0xCCF5B38438599377', colour, onFoot, inVehicle);
	return startGpsCustomRoute_result;
}