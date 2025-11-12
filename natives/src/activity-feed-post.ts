/**
 * MISC:ACTIVITY_FEED_POST
 *
 * 0x3A4500FC2B94720A

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function activityFeedPost(): void {
	const activityFeedPost_result = Citizen.invokeNative<void>('0x3A4500FC2B94720A', );
	return activityFeedPost_result;
}