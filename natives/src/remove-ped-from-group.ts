import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:REMOVE_PED_FROM_GROUP
 *
 * 0x5C4B3034CCDA5270

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function removePedFromGroup(ped: PedIndex): void {
	const removePedFromGroup_result = Citizen.invokeNative<void>('0x5C4B3034CCDA5270', ped);
	return removePedFromGroup_result;
}