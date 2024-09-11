/**
 * STATS:STAT_COMMUNITY_START_SYNCH
 *
 * 0x4B995F8441EAC13B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statCommunityStartSynch(): boolean {
	const statCommunityStartSynch_result = Citizen.invokeNative<boolean>('0x4B995F8441EAC13B', );
	return statCommunityStartSynch_result;
}