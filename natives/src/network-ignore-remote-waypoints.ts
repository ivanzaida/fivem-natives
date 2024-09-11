/**
 * NETWORK:NETWORK_IGNORE_REMOTE_WAYPOINTS
 *
 * 0xE30EF2DB0A0576B4

 * 
 * ------------------------------------------------------------------
 */
export function networkIgnoreRemoteWaypoints(): void {
	const networkIgnoreRemoteWaypoints_result = Citizen.invokeNative<void>('0xE30EF2DB0A0576B4', );
	return networkIgnoreRemoteWaypoints_result;
}