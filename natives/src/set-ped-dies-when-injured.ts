import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DIES_WHEN_INJURED
 *
 * 0x9E6CC93E007219AC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} dies
 */
export function setPedDiesWhenInjured(ped: PedIndex, dies: boolean): void {
	const setPedDiesWhenInjured_result = Citizen.invokeNative<void>('0x9E6CC93E007219AC', ped, dies);
	return setPedDiesWhenInjured_result;
}