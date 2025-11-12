import { PedIndex, EFiringType } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_START_SHOOTING_AT_PED
 *
 * 0x379242666BA2ED8B

 * 
 * Starts the ped shooting at the specified ped or coordinates whilst already following a waypoint-recording
 * bRunAndGun - specifies whether to use "run & gun" to shoot over shoulder whilst running (ie. ped doesn't strafe)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} targetPed
 * @param {boolean} runAndGun
 * @param {EFiringType} firingPatternHash
 */
export function waypointPlaybackStartShootingAtPed(ped: PedIndex, targetPed: PedIndex, runAndGun: boolean, firingPatternHash: EFiringType | number = 0): void {
	const waypointPlaybackStartShootingAtPed_result = Citizen.invokeNative<void>('0x379242666BA2ED8B', ped, targetPed, runAndGun, firingPatternHash);
	return waypointPlaybackStartShootingAtPed_result;
}