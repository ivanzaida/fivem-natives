import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_ANY_HOSTILE_PED_NEAR_POINT
 *
 * 0x830B1CF1020074B8

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} pointX
 * @param {number} pointY
 * @param {number} pointZ
 * @param {number} radius
 * @returns {boolean}  
 */
export function isAnyHostilePedNearPoint(ped: PedIndex, pointX: number, pointY: number, pointZ: number, radius: number): boolean {
	const isAnyHostilePedNearPoint_result = Citizen.invokeNative<boolean>('0x830B1CF1020074B8', ped, pointX, pointY, pointZ, radius);
	return isAnyHostilePedNearPoint_result;
}