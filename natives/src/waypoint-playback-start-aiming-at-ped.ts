import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_START_AIMING_AT_PED
 *
 * 0x5316592ADD122C13

 * 
 * Starts the ped aiming at the specified ped or coordinates whilst already following a waypoint-recording
 * bRunAndGun - specifies whether to use "run & gun" to shoot over shoulder whilst running (ie. ped doesn't strafe)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @param {boolean} runAndGun
 */
export function waypointPlaybackStartAimingAtPed(ped: PedIndex, targetPed: PedIndex, runAndGun: boolean): void {
	const waypointPlaybackStartAimingAtPed_result = Citizen.invokeNative<void>('0x5316592ADD122C13', ped, targetPed, runAndGun);
	return waypointPlaybackStartAimingAtPed_result;
}