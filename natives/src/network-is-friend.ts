import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_FRIEND
 *
 * 0xEDD63461767A518C

 * 
 * Checks if player represented by this gamer handle is a friend of the local player
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsFriend(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsFriend_result = Citizen.invokeNative<boolean>('0xEDD63461767A518C', gamerHandle.dataView);
	return networkIsFriend_result;
}