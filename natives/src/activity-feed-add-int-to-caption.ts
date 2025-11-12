/**
 * MISC:ACTIVITY_FEED_ADD_INT_TO_CAPTION
 *
 * 0x1C49F79FA808A72C

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} subValue
 */
export function activityFeedAddIntToCaption(subValue: number): void {
	const activityFeedAddIntToCaption_result = Citizen.invokeNative<void>('0x1C49F79FA808A72C', subValue);
	return activityFeedAddIntToCaption_result;
}