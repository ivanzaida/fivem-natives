/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EVENT_ID
 *
 * 0xB84E5B0DD408418E

 * 
 * If thre is an active SC community event, this function will return the event Id
 * string, which can be used as a category value for leaderboard submissions
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function scCommunityEventGetEventId(): number {
	const scCommunityEventGetEventId_result = Citizen.invokeNative<number>('0xB84E5B0DD408418E', );
	return scCommunityEventGetEventId_result;
}