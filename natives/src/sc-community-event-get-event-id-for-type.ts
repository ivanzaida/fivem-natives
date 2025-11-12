/**
 * SOCIALCLUB:SC_COMMUNITY_EVENT_GET_EVENT_ID_FOR_TYPE
 *
 * 0xC9892FE6CC695923

 * 
 * If thre is an active SC community event with given type, this function will return the event Id
 * string, which can be used as a category value for leaderboard submissions
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} eventType
 * @returns {number}  
 */
export function scCommunityEventGetEventIdForType(eventType: string): number {
	const scCommunityEventGetEventIdForType_result = Citizen.invokeNative<number>('0xC9892FE6CC695923', eventType);
	return scCommunityEventGetEventIdForType_result;
}