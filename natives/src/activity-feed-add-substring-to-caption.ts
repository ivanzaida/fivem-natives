/**
 * MISC:ACTIVITY_FEED_ADD_SUBSTRING_TO_CAPTION
 *
 * 0x0E68815680F90E0E

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} subString
 */
export function activityFeedAddSubstringToCaption(subString: string): void {
	const activityFeedAddSubstringToCaption_result = Citizen.invokeNative<void>('0x0E68815680F90E0E', subString);
	return activityFeedAddSubstringToCaption_result;
}