/**
 * HUD:REFRESH_WAYPOINT
 *
 * 0xB43DFE4F244E0F8E

 * 
 * ------------------------------------------------------------------
 */
export function refreshWaypoint(): void {
	const refreshWaypoint_result = Citizen.invokeNative<void>('0xB43DFE4F244E0F8E', );
	return refreshWaypoint_result;
}