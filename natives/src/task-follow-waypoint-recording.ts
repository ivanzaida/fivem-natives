import { PedIndex, EEwaypointFollowFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_FOLLOW_WAYPOINT_RECORDING
 *
 * 0x7FD62C74ABB26599

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} recordingName
 * @param {number} startingProgress
 * @param {EEwaypointFollowFlags} flags
 * @param {number} targetProgress
 */
export function taskFollowWaypointRecording(ped: PedIndex, recordingName: string, startingProgress: number = 0, flags: EEwaypointFollowFlags | number = 0, targetProgress: number = 1): void {
	const taskFollowWaypointRecording_result = Citizen.invokeNative<void>('0x7FD62C74ABB26599', ped, recordingName, startingProgress, flags, targetProgress);
	return taskFollowWaypointRecording_result;
}