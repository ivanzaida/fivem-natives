/**
 * MISC:ACTIVITY_FEED_CREATE
 *
 * 0x1C18D23E19C76212

 * 
 * Creating a new post, will wipe any currently open posts
 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} captionString
 * @param {string} condensedCaptionString
 */
export function activityFeedCreate(captionString: string, condensedCaptionString: string): void {
	const activityFeedCreate_result = Citizen.invokeNative<void>('0x1C18D23E19C76212', captionString, condensedCaptionString);
	return activityFeedCreate_result;
}