import { GamerHandle, NetworkClanDesc } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_GET_MEMBERSHIP
 *
 * 0xC044D4B0F1BFE812

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {NetworkClanDesc} memberInfo [Ref]
 * @param {number} membership
 * @returns {boolean}  
 */
export function networkClanGetMembership(gamerHandle: GamerHandle /* ptr */, memberInfo: NetworkClanDesc /* ptr */, membership: number): boolean {
	const networkClanGetMembership_result = Citizen.invokeNative<boolean>('0xC044D4B0F1BFE812', gamerHandle.dataView, memberInfo.dataView, membership);
	return networkClanGetMembership_result;
}