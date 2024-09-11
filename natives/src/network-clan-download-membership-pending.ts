import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_DOWNLOAD_MEMBERSHIP_PENDING
 *
 * 0x1B9836D5F27EFE57

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkClanDownloadMembershipPending(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkClanDownloadMembershipPending_result = Citizen.invokeNative<boolean>('0x1B9836D5F27EFE57', gamerHandle.dataView);
	return networkClanDownloadMembershipPending_result;
}