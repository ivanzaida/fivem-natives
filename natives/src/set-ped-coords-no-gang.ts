import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_COORDS_NO_GANG
 *
 * 0xCE2DE9BE961A9AF1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 */
export function setPedCoordsNoGang(ped: PedIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number): void {
	const setPedCoordsNoGang_result = Citizen.invokeNative<void>('0xCE2DE9BE961A9AF1', ped, newCoorsX, newCoorsY, newCoorsZ);
	return setPedCoordsNoGang_result;
}