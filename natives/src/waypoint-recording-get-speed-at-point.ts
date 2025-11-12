/**
 * TASK:WAYPOINT_RECORDING_GET_SPEED_AT_POINT
 *
 * 0x2A0C849D5991C7F4

 * 
 * Returns the speed at a given point in the waypoint recording.
 * If a vehicle waypoint recording, returns speed in m/s. If for peds, returns an MBR
 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 * @param {number} waypoint
 * @returns {number}  
 */
export function waypointRecordingGetSpeedAtPoint(recordingName: string, waypoint: number): number {
	const waypointRecordingGetSpeedAtPoint_result = Citizen.invokeNative<number>('0x2A0C849D5991C7F4', recordingName, waypoint);
	return waypointRecordingGetSpeedAtPoint_result;
}