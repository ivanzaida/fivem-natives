import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_CAN_RAGDOLL
 *
 * 0XCF1384C4

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} unlock
 */
export function setPedCanRagdoll(ped: PedIndex, unlock: boolean): void {
	const setPedCanRagdoll_result = Citizen.invokeNative<void>('0XCF1384C4', ped, unlock);
	return setPedCanRagdoll_result;
}