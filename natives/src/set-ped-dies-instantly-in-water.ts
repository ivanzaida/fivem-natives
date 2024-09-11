import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DIES_INSTANTLY_IN_WATER
 *
 * 0x3FF406EF0BE27DA3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} diesInstantly
 */
export function setPedDiesInstantlyInWater(ped: PedIndex, diesInstantly: boolean): void {
	const setPedDiesInstantlyInWater_result = Citizen.invokeNative<void>('0x3FF406EF0BE27DA3', ped, diesInstantly);
	return setPedDiesInstantlyInWater_result;
}