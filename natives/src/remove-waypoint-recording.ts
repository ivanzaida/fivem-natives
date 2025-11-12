/**
 * TASK:REMOVE_WAYPOINT_RECORDING
 *
 * 0x8943BF9E0F15EDA0

 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 */
export function removeWaypointRecording(recordingName: string): void {
	const removeWaypointRecording_result = Citizen.invokeNative<void>('0x8943BF9E0F15EDA0', recordingName);
	return removeWaypointRecording_result;
}