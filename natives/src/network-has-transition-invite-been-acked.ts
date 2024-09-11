import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_TRANSITION_INVITE_BEEN_ACKED
 *
 * 0xE9E0BE3414B91F8E

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkHasTransitionInviteBeenAcked(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkHasTransitionInviteBeenAcked_result = Citizen.invokeNative<boolean>('0xE9E0BE3414B91F8E', gamerHandle.dataView);
	return networkHasTransitionInviteBeenAcked_result;
}