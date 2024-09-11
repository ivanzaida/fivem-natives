/**
 * HUD:IS_WAYPOINT_ACTIVE
 *
 * 0x02213DC34A224533

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isWaypointActive(): boolean {
	const isWaypointActive_result = Citizen.invokeNative<boolean>('0x02213DC34A224533', );
	return isWaypointActive_result;
}