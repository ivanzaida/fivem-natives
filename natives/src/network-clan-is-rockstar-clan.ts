import { NetworkClanDesc } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CLAN_IS_ROCKSTAR_CLAN
 *
 * 0xF05A19B508A1ECF0

 * 
 * Determines if a given clan is a Rockstar clan or not
 * (Isn't actually stored in the data we get back)
 * Requires that it's set up from NETWORK_CLAN_PLAYER_GET_DESC previously
 * 
 * bufferSize is 35 in the scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkClanDesc} clanToCheck [Ref]
 * @param {number} sizeOfData
 * @returns {boolean}  
 */
export function networkClanIsRockstarClan(clanToCheck: NetworkClanDesc /* ptr */, sizeOfData: number): boolean {
	const networkClanIsRockstarClan_result = Citizen.invokeNative<boolean>('0xF05A19B508A1ECF0', clanToCheck.dataView, sizeOfData);
	return networkClanIsRockstarClan_result;
}