import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_GET_MEMBERSHIP_VALID
 *
 * 0x0E4DC83CCE846C81

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} membership
 * @returns {boolean}  
 */
export function networkClanGetMembershipValid(gamerHandle: GamerHandle /* ptr */, membership: number): boolean {
	const networkClanGetMembershipValid_result = Citizen.invokeNative<boolean>('0x0E4DC83CCE846C81', gamerHandle.dataView, membership);
	return networkClanGetMembershipValid_result;
}