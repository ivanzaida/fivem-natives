/**
 * TASK:GET_WAYPOINT_DISTANCE_ALONG_ROUTE
 *
 * 0x2157DED369B9B03F

 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 * @param {number} waypoint
 * @returns {number}  
 */
export function getWaypointDistanceAlongRoute(recordingName: string, waypoint: number): number {
	const getWaypointDistanceAlongRoute_result = Citizen.invokeNative<number>('0x2157DED369B9B03F', recordingName, waypoint);
	return getWaypointDistanceAlongRoute_result;
}