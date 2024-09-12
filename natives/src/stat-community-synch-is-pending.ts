/**
 * STATS:STAT_COMMUNITY_SYNCH_IS_PENDING
 *
 * 0xB8581B151258A47D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function statCommunitySynchIsPending(): boolean {
	const statCommunitySynchIsPending_result = Citizen.invokeNative<boolean>('0xB8581B151258A47D', );
	return statCommunitySynchIsPending_result;
}