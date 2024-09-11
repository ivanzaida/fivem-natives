import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_RESUME
 *
 * 0xFFD8D929BFEA2C66

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} achieveHeadingFirst
 * @param {number} progressToContinueFrom
 * @param {number} timeBeforeResumingMs
 */
export function waypointPlaybackResume(ped: PedIndex, achieveHeadingFirst: boolean = false, progressToContinueFrom: number = 1, timeBeforeResumingMs: number = 0): void {
	const waypointPlaybackResume_result = Citizen.invokeNative<void>('0xFFD8D929BFEA2C66', ped, achieveHeadingFirst, progressToContinueFrom, timeBeforeResumingMs);
	return waypointPlaybackResume_result;
}