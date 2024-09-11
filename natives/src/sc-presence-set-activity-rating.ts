/**
 * SOCIALCLUB:SC_PRESENCE_SET_ACTIVITY_RATING
 *
 * 0xB88224D7000C5E8B

 * 
 * ------------------------------------------------------------------
 * @param {number} activityID
 * @param {number} rating
 * @returns {boolean}  
 */
export function scPresenceSetActivityRating(activityID: number, rating: number): boolean {
	const scPresenceSetActivityRating_result = Citizen.invokeNative<boolean>('0xB88224D7000C5E8B', activityID, rating);
	return scPresenceSetActivityRating_result;
}