import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_GET_IS_PAUSED
 *
 * 0xD6C64BE35FD4ED11

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function waypointPlaybackGetIsPaused(ped: PedIndex): boolean {
	const waypointPlaybackGetIsPaused_result = Citizen.invokeNative<boolean>('0xD6C64BE35FD4ED11', ped);
	return waypointPlaybackGetIsPaused_result;
}