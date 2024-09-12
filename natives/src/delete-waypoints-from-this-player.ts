/**
 * HUD:DELETE_WAYPOINTS_FROM_THIS_PLAYER
 *
 * 0x51A6E4D010C4EA83

 * 
 * ------------------------------------------------------------------
 */
export function deleteWaypointsFromThisPlayer(): void {
	const deleteWaypointsFromThisPlayer_result = Citizen.invokeNative<void>('0x51A6E4D010C4EA83', );
	return deleteWaypointsFromThisPlayer_result;
}