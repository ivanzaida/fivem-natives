import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_USE_DEFAULT_SPEED
 *
 * 0xF2BE617CD4ED96CD

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function waypointPlaybackUseDefaultSpeed(ped: PedIndex): void {
	const waypointPlaybackUseDefaultSpeed_result = Citizen.invokeNative<void>('0xF2BE617CD4ED96CD', ped);
	return waypointPlaybackUseDefaultSpeed_result;
}