import { ToFreemodeGamers } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ADD_FOLLOWERS
 *
 * 0x26AC5C43C19083BA

 * 
 * Functions to add / remove / inspect followers. Followers are players who will, cross session,
 * be able to 'follow' the target user from session to session (via presence invite)
 * 
 * ..
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ToFreemodeGamers} gamers [Ref]
 * @param {number} numGamers
 */
export function networkAddFollowers(gamers: ToFreemodeGamers /* ptr */, numGamers: number): void {
	const networkAddFollowers_result = Citizen.invokeNative<void>('0x26AC5C43C19083BA', gamers.dataView, numGamers);
	return networkAddFollowers_result;
}