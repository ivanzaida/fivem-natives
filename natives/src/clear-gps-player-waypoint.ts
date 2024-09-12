/**
 * HUD:CLEAR_GPS_PLAYER_WAYPOINT
 *
 * 0x5026A520BB4620A7

 * 
 * ------------------------------------------------------------------
 */
export function clearGpsPlayerWaypoint(): void {
	const clearGpsPlayerWaypoint_result = Citizen.invokeNative<void>('0x5026A520BB4620A7', );
	return clearGpsPlayerWaypoint_result;
}