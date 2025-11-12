/**
 * TASK:REQUEST_WAYPOINT_RECORDING
 *
 * 0xD04A772C411165F2

 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * Max number of loaded recordings is 32.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 */
export function requestWaypointRecording(recordingName: string): void {
	const requestWaypointRecording_result = Citizen.invokeNative<void>('0xD04A772C411165F2', recordingName);
	return requestWaypointRecording_result;
}