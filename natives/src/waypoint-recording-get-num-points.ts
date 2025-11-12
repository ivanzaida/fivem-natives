import { IntRef } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_RECORDING_GET_NUM_POINTS
 *
 * 0xD352CFACACA313A1

 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 * @param {IntRef} outNumPoints [Ref]
 * @returns {boolean}  
 */
export function waypointRecordingGetNumPoints(recordingName: string, outNumPoints: IntRef /* ptr */): boolean {
	const waypointRecordingGetNumPoints_result = Citizen.invokeNative<boolean>('0xD352CFACACA313A1', recordingName, outNumPoints.dataView);
	return waypointRecordingGetNumPoints_result;
}