import { PedIndex, ItemsetIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PREFERRED_COVER_SET
 *
 * 0x392230C626567F51

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ItemsetIndex} itemSet
 */
export function setPedPreferredCoverSet(ped: PedIndex, itemSet: ItemsetIndex): void {
	const setPedPreferredCoverSet_result = Citizen.invokeNative<void>('0x392230C626567F51', ped, itemSet);
	return setPedPreferredCoverSet_result;
}