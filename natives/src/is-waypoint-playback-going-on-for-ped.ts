import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_WAYPOINT_PLAYBACK_GOING_ON_FOR_PED
 *
 * 0xBD08B11F7404F5CD

 * 
 * Returns whether the given ped is running a script-given waypoint-recording task.
 * This returns true regardless of whether the recording is paused, or an event has taken precedence.
 * You should always use GET_SCRIPT_TASK_STATUS if you need to differentiate between active/dormant tasks.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isWaypointPlaybackGoingOnForPed(ped: PedIndex): boolean {
	const isWaypointPlaybackGoingOnForPed_result = Citizen.invokeNative<boolean>('0xBD08B11F7404F5CD', ped);
	return isWaypointPlaybackGoingOnForPed_result;
}