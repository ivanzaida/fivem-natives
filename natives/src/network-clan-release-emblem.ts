/**
 * NETWORK:NETWORK_CLAN_RELEASE_EMBLEM
 *
 * 0x84B5F8F55152B935

 * 
 * ------------------------------------------------------------------
 * @param {number} clanId
 */
export function networkClanReleaseEmblem(clanId: number): void {
	const networkClanReleaseEmblem_result = Citizen.invokeNative<void>('0x84B5F8F55152B935', clanId);
	return networkClanReleaseEmblem_result;
}