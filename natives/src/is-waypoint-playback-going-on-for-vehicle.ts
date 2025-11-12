import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_VEHICLE
 *
 * 0x8DC9348C726B1575

 * 
 * Returns whether the given vehicle is running a script-given waypoint-recording task.
 * This returns true regardless of whether the recording is paused, or an event has taken precedence.
 * You should always use GET_SCRIPT_TASK_STATUS if you need to differentiate between active/dormant tasks.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @returns {boolean}  
 */
export function isWaypointPlaybackGoingOnForVehicle(veh: VehicleIndex): boolean {
	const isWaypointPlaybackGoingOnForVehicle_result = Citizen.invokeNative<boolean>('0x8DC9348C726B1575', veh);
	return isWaypointPlaybackGoingOnForVehicle_result;
}