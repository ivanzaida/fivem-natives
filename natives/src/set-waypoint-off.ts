/**
 * HUD:SET_WAYPOINT_OFF
 *
 * 0xA4C1E1845880C098

 * 
 * This native removes the current waypoint from the map.
 * 
 * Example:
 * C#:
 * Function.Call(Hash.SET_WAYPOINT_OFF);
 * 
 * C++:
 * HUD::SET_WAYPOINT_OFF();
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setWaypointOff(): void {
	const setWaypointOff_result = Citizen.invokeNative<void>('0xA4C1E1845880C098', );
	return setWaypointOff_result;
}