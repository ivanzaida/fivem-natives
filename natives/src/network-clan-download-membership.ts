import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_DOWNLOAD_MEMBERSHIP
 *
 * 0x5A748C59E0807FB6

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkClanDownloadMembership(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkClanDownloadMembership_result = Citizen.invokeNative<boolean>('0x5A748C59E0807FB6', gamerHandle.dataView);
	return networkClanDownloadMembership_result;
}