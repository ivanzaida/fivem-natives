import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_NEVER_LEAVES_GROUP
 *
 * 0xBC14FFDBE1C32C51

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} neverLeavesGroupFlag
 */
export function setPedNeverLeavesGroup(ped: PedIndex, neverLeavesGroupFlag: boolean): void {
	const setPedNeverLeavesGroup_result = Citizen.invokeNative<void>('0xBC14FFDBE1C32C51', ped, neverLeavesGroupFlag);
	return setPedNeverLeavesGroup_result;
}