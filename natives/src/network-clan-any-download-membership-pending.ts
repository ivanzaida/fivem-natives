/**
 * NETWORK:NETWORK_CLAN_ANY_DOWNLOAD_MEMBERSHIP_PENDING
 *
 * 0xD0E82DF28BBDFA90

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkClanAnyDownloadMembershipPending(): boolean {
	const networkClanAnyDownloadMembershipPending_result = Citizen.invokeNative<boolean>('0xD0E82DF28BBDFA90', );
	return networkClanAnyDownloadMembershipPending_result;
}