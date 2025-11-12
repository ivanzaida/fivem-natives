import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_REMOTE_MEMBERSHIPS_ARE_IN_CACHE
 *
 * 0xBC8E0392E851E2B8

 * 
 * Code always remembers the last remote player's downloaded memberships retreived using NETWORK_CLAN_DOWNLOAD_MEMBERSHIP.
 * Script can use this func to check if data is there, and avoid calling NETWORK_CLAN_DOWNLOAD_MEMBERSHIP if we don't need to force a refresh
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandle [Ref]
 * @returns {boolean}  
 */
export function networkClanRemoteMembershipsAreInCache(gamerHandle: GamerHandle /* ptr */): boolean {
	const networkClanRemoteMembershipsAreInCache_result = Citizen.invokeNative<boolean>('0xBC8E0392E851E2B8', gamerHandle.dataView);
	return networkClanRemoteMembershipsAreInCache_result;
}