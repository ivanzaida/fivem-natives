import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:WAYPOINT_PLAYBACK_START_AIMING_AT_COORD
 *
 * 0xA9260F368C3AE393

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} targetCoordsX
 * @param {number} targetCoordsY
 * @param {number} targetCoordsZ
 * @param {boolean} runAndGun
 */
export function waypointPlaybackStartAimingAtCoord(ped: PedIndex, targetCoordsX: number, targetCoordsY: number, targetCoordsZ: number, runAndGun: boolean): void {
	const waypointPlaybackStartAimingAtCoord_result = Citizen.invokeNative<void>('0xA9260F368C3AE393', ped, targetCoordsX, targetCoordsY, targetCoordsZ, runAndGun);
	return waypointPlaybackStartAimingAtCoord_result;
}