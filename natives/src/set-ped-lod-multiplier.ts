import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_LOD_MULTIPLIER
 *
 * 0x93956DF263A4A0DC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} multiplier
 */
export function setPedLodMultiplier(ped: PedIndex, multiplier: number): void {
	const setPedLodMultiplier_result = Citizen.invokeNative<void>('0x93956DF263A4A0DC', ped, multiplier);
	return setPedLodMultiplier_result;
}