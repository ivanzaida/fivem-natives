/**
 * PATHFIND:GET_GPS_BLIP_ROUTE_LENGTH
 *
 * 0x0715F5EED76FCDE9

 * 
 * Function to get the gps route length, will return 0 if no route is currently being used.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getGpsBlipRouteLength(): number {
	const getGpsBlipRouteLength_result = Citizen.invokeNative<number>('0x0715F5EED76FCDE9', );
	return getGpsBlipRouteLength_result;
}