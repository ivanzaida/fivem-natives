/**
 * NETWORK:NETWORK_CLAN_REQUEST_EMBLEM
 *
 * 0xC8FEAF9D86CA72E6

 * 
 * ------------------------------------------------------------------
 * @param {number} clanId
 * @returns {boolean}  
 */
export function networkClanRequestEmblem(clanId: number): boolean {
	const networkClanRequestEmblem_result = Citizen.invokeNative<boolean>('0xC8FEAF9D86CA72E6', clanId);
	return networkClanRequestEmblem_result;
}