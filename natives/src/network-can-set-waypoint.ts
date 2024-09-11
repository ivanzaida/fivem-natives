/**
 * NETWORK:NETWORK_CAN_SET_WAYPOINT
 *
 * 0xA610A20639713DEA

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCanSetWaypoint(): boolean {
	const networkCanSetWaypoint_result = Citizen.invokeNative<boolean>('0xA610A20639713DEA', );
	return networkCanSetWaypoint_result;
}