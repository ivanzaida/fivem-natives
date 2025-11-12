import { IntRef } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_RECORDING_GET_CLOSEST_WAYPOINT
 *
 * 0xC283DA397F6D065D

 * 
 * Retrieves the the closest waypoint to the given position.  The recording must be loaded.  Vaule returned by parameter.
 * Waypoint playback doesn't need to be active.
 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * For a full list of the points, see here: goo.gl/wIH0vn
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {IntRef} outWaypoint [Ref]
 * @returns {boolean}  
 */
export function waypointRecordingGetClosestWaypoint(recordingName: string, posX: number, posY: number, posZ: number, outWaypoint: IntRef /* ptr */): boolean {
	const waypointRecordingGetClosestWaypoint_result = Citizen.invokeNative<boolean>('0xC283DA397F6D065D', recordingName, posX, posY, posZ, outWaypoint.dataView);
	return waypointRecordingGetClosestWaypoint_result;
}