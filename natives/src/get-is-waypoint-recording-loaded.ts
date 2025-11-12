/**
 * TASK:GET_IS_WAYPOINT_RECORDING_LOADED
 *
 * 0xA08EEC7306CF6198

 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 * @returns {boolean}  
 */
export function getIsWaypointRecordingLoaded(recordingName: string): boolean {
	const getIsWaypointRecordingLoaded_result = Citizen.invokeNative<boolean>('0xA08EEC7306CF6198', recordingName);
	return getIsWaypointRecordingLoaded_result;
}