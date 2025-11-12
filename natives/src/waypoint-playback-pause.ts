import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_PAUSE
 *
 * 0x27EC70BAD907B76B

 * 
 * Pauses the playback of a waypoint-recording on the specified ped, and optionally instructs them to face the player
 * bStopBeforeOrientating = causes the ped to halt before turning, so they do not leave their route
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} facePlayer
 * @param {boolean} stopBeforeOrientating
 */
export function waypointPlaybackPause(ped: PedIndex, facePlayer: boolean, stopBeforeOrientating: boolean = false): void {
	const waypointPlaybackPause_result = Citizen.invokeNative<void>('0x27EC70BAD907B76B', ped, facePlayer, stopBeforeOrientating);
	return waypointPlaybackPause_result;
}