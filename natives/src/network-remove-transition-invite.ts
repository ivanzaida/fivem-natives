import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_REMOVE_TRANSITION_INVITE
 *
 * 0x78595F3231E58B25

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 */
export function networkRemoveTransitionInvite(gamer: GamerHandle /* ptr */): void {
	const networkRemoveTransitionInvite_result = Citizen.invokeNative<void>('0x78595F3231E58B25', gamer.dataView);
	return networkRemoveTransitionInvite_result;
}