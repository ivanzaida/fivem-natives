import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SESSION_GET_INVITER
 *
 * 0xDAB06DF0C53853BB

 * 
 * Fills in gamer handle of player who invited us to this session.
 * This asserts if NETWORK_SESSION_WAS_INVITED is FALSE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 */
export function networkSessionGetInviter(gamerHandle: GamerHandle /* ptr */): void {
	const networkSessionGetInviter_result = Citizen.invokeNative<void>('0xDAB06DF0C53853BB', gamerHandle.dataView);
	return networkSessionGetInviter_result;
}