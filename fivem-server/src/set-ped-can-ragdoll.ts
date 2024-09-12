import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PED_CAN_RAGDOLL
 *
 * 0xCF1384C4

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} toggle
 */
export function setPedCanRagdoll(ped: PedIndex, toggle: boolean): void {
	const setPedCanRagdoll_result = Citizen.invokeNative<void>('0xCF1384C4', ped, toggle);
	return setPedCanRagdoll_result;
}