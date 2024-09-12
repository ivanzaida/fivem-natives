import { PedIndex, EFiringType } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_START_SHOOTING_AT_COORD
 *
 * 0x8CE357AE01230A0B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} targetCoordsX
 * @param {number} targetCoordsY
 * @param {number} targetCoordsZ
 * @param {boolean} runAndGun
 * @param {EFiringType} firingPatternHash
 */
export function waypointPlaybackStartShootingAtCoord(ped: PedIndex, targetCoordsX: number, targetCoordsY: number, targetCoordsZ: number, runAndGun: boolean, firingPatternHash: EFiringType | number = 0): void {
	const waypointPlaybackStartShootingAtCoord_result = Citizen.invokeNative<void>('0x8CE357AE01230A0B', ped, targetCoordsX, targetCoordsY, targetCoordsZ, runAndGun, firingPatternHash);
	return waypointPlaybackStartShootingAtCoord_result;
}