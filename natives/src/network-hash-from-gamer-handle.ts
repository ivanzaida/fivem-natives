import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HASH_FROM_GAMER_HANDLE
 *
 * 0xA7D865785DB9408A

 * 
 * Retrieve a hash for a gamer handle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {number}  
 */
export function networkHashFromGamerHandle(gamerHandle: GamerHandle /* ptr */): number {
	const networkHashFromGamerHandle_result = Citizen.invokeNative<number>('0xA7D865785DB9408A', gamerHandle.dataView);
	return networkHashFromGamerHandle_result;
}