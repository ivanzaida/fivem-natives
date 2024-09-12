import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_CAN_RAGDOLL_FROM_PLAYER_IMPACT
 *
 * 0x81E9E7612B0E4BCE

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} allow
 */
export function setPedCanRagdollFromPlayerImpact(ped: PedIndex, allow: boolean): void {
	const setPedCanRagdollFromPlayerImpact_result = Citizen.invokeNative<void>('0x81E9E7612B0E4BCE', ped, allow);
	return setPedCanRagdollFromPlayerImpact_result;
}