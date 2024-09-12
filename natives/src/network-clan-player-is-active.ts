import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_PLAYER_IS_ACTIVE
 *
 * 0xE582BF3EDDBB1A68

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkClanPlayerIsActive(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkClanPlayerIsActive_result = Citizen.invokeNative<boolean>('0xE582BF3EDDBB1A68', gamerHandle.dataView);
	return networkClanPlayerIsActive_result;
}