import { PedIndex, ERagdollBlockingFlags } from '@ivanzaida/structures'

/**
 * PED:CLEAR_RAGDOLL_BLOCKING_FLAGS
 *
 * 0xBCB78CFBB026B0DF

 * 
 * See SET_RAGDOLL_BLOCKING_FLAGS for flags
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {ERagdollBlockingFlags} flags
 */
export function clearRagdollBlockingFlags(ped: PedIndex, flags: ERagdollBlockingFlags | number = 1): void {
	const clearRagdollBlockingFlags_result = Citizen.invokeNative<void>('0xBCB78CFBB026B0DF', ped, flags);
	return clearRagdollBlockingFlags_result;
}