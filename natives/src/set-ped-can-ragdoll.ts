import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_RAGDOLL
 *
 * 0x9FF00EA9A61211D2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} unlock
 */
export function setPedCanRagdoll(ped: PedIndex, unlock: boolean): void {
	const setPedCanRagdoll_result = Citizen.invokeNative<void>('0x9FF00EA9A61211D2', ped, unlock);
	return setPedCanRagdoll_result;
}