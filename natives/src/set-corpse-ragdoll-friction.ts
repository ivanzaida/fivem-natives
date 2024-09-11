import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_CORPSE_RAGDOLL_FRICTION
 *
 * 0xC082B2B13450E715

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} friction
 */
export function setCorpseRagdollFriction(ped: PedIndex, friction: number): void {
	const setCorpseRagdollFriction_result = Citizen.invokeNative<void>('0xC082B2B13450E715', ped, friction);
	return setCorpseRagdollFriction_result;
}