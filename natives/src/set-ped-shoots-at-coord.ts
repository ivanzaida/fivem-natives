import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOOTS_AT_COORD
 *
 * 0xC7AF90C5FC07B06B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} vecTargetX
 * @param {number} vecTargetY
 * @param {number} vecTargetZ
 * @param {boolean} perfectAccuracy
 */
export function setPedShootsAtCoord(ped: PedIndex, vecTargetX: number, vecTargetY: number, vecTargetZ: number, perfectAccuracy: boolean = false): void {
	const setPedShootsAtCoord_result = Citizen.invokeNative<void>('0xC7AF90C5FC07B06B', ped, vecTargetX, vecTargetY, vecTargetZ, perfectAccuracy);
	return setPedShootsAtCoord_result;
}