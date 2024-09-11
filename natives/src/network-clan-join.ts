/**
 * NETWORK:NETWORK_CLAN_JOIN
 *
 * 0xA360DA3480F0FFB9

 * 
 * ------------------------------------------------------------------
 * @param {number} clanId
 * @returns {boolean}  
 */
export function networkClanJoin(clanId: number): boolean {
	const networkClanJoin_result = Citizen.invokeNative<boolean>('0xA360DA3480F0FFB9', clanId);
	return networkClanJoin_result;
}