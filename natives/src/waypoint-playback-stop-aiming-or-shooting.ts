import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_STOP_AIMING_OR_SHOOTING
 *
 * 0x1B24CB0A1764E540

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function waypointPlaybackStopAimingOrShooting(ped: PedIndex): void {
	const waypointPlaybackStopAimingOrShooting_result = Citizen.invokeNative<void>('0x1B24CB0A1764E540', ped);
	return waypointPlaybackStopAimingOrShooting_result;
}