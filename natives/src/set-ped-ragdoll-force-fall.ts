import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_RAGDOLL_FORCE_FALL
 *
 * 0x661428616F87F180

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedRagdollForceFall(ped: PedIndex): void {
	const setPedRagdollForceFall_result = Citizen.invokeNative<void>('0x661428616F87F180', ped);
	return setPedRagdollForceFall_result;
}