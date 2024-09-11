import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_ON_BLOCKLIST
 *
 * 0xF3BBE5935A04D276

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkIsPlayerOnBlocklist(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkIsPlayerOnBlocklist_result = Citizen.invokeNative<boolean>('0xF3BBE5935A04D276', gamerHandle.dataView);
	return networkIsPlayerOnBlocklist_result;
}