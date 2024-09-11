import { NetworkClanDesc } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_GET_MEMBERSHIP_DESC
 *
 * 0xDF6959109D35BAAB

 * 
 * ------------------------------------------------------------------
 * @param {NetworkClanDesc} memberInfo [Ref]
 * @param {number} membership
 * @returns {boolean}  
 */
export function networkClanGetMembershipDesc(memberInfo: NetworkClanDesc /* ptr */, membership: number): boolean {
	const networkClanGetMembershipDesc_result = Citizen.invokeNative<boolean>('0xDF6959109D35BAAB', memberInfo.dataView, membership);
	return networkClanGetMembershipDesc_result;
}