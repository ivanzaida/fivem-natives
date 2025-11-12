import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_GAMER_IN_MY_SESSION
 *
 * 0xBE0146369C46314B

 * 
 * Returns TRUE if the player represented by this gamer handle is in the same session
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsGamerInMySession(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsGamerInMySession_result = Citizen.invokeNative<boolean>('0xBE0146369C46314B', gamerHandle.dataView);
	return networkIsGamerInMySession_result;
}