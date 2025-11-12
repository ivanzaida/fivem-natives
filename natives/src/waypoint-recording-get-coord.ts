import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * TASK:WAYPOINT_RECORDING_GET_COORD
 *
 * 0x653B8254D6830E88

 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 * @param {number} waypoint
 * @param {Vector3} outCoord [Ref]
 * @returns {boolean}  
 */
export function waypointRecordingGetCoord(recordingName: string, waypoint: number, outCoord: Vector3 /* ptr */): boolean {
	const outCoordPtr = new Vector3Ref();
	const waypointRecordingGetCoord_result = Citizen.invokeNative<boolean>('0x653B8254D6830E88', recordingName, waypoint, outCoordPtr.dataView);
	outCoordPtr.copyToVector(outCoord);
	return waypointRecordingGetCoord_result;
}