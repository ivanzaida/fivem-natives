/**
 * MISC:ACTIVITY_FEED_LARGE_IMAGE_URL
 *
 * 0x6304FE01A952A1ED

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} urlString
 */
export function activityFeedLargeImageUrl(urlString: string): void {
	const activityFeedLargeImageUrl_result = Citizen.invokeNative<void>('0x6304FE01A952A1ED', urlString);
	return activityFeedLargeImageUrl_result;
}