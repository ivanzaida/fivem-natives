import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CAN_PED_RAGDOLL
 *
 * 0xC24FAA5E8D69F7F8

 * 
 * A ped will only switch to a ragdoll if it's onscreen and within range of the player.
 * 
 * Prevents the ped from going limp.
 * 
 * [Example: Can prevent peds from falling when standing on moving vehicles.]
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function canPedRagdoll(ped: PedIndex): boolean {
	const canPedRagdoll_result = Citizen.invokeNative<boolean>('0xC24FAA5E8D69F7F8', ped);
	return canPedRagdoll_result;
}