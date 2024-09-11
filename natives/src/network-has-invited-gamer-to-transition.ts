import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_INVITED_GAMER_TO_TRANSITION
 *
 * 0xD5C2153418DB9348

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkHasInvitedGamerToTransition(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkHasInvitedGamerToTransition_result = Citizen.invokeNative<boolean>('0xD5C2153418DB9348', gamerHandle.dataView);
	return networkHasInvitedGamerToTransition_result;
}