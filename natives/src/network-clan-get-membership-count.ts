import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_GET_MEMBERSHIP_COUNT
 *
 * 0x6CC5D49F92B6055B

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {number}  
 */
export function networkClanGetMembershipCount(gamerHandle: GamerHandle /* ptr */): number {
	const networkClanGetMembershipCount_result = Citizen.invokeNative<number>('0x6CC5D49F92B6055B', gamerHandle.dataView);
	return networkClanGetMembershipCount_result;
}