import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_COWER_IN_COVER
 *
 * 0x32089D2C6AD6199B

 * 
 * It simply makes the said ped to cower behind cover object(wall, desk, car)
 * 
 * Peds flee attributes must be set to not to flee, first. Else, most of the peds, will just flee from gunshot sounds or any other panic situations.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allowCower
 */
export function setPedCanCowerInCover(ped: PedIndex, allowCower: boolean): void {
	const setPedCanCowerInCover_result = Citizen.invokeNative<void>('0x32089D2C6AD6199B', ped, allowCower);
	return setPedCanCowerInCover_result;
}