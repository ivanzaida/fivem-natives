/**
 * MISC:ACTIVITY_FEED_ADD_LITERAL_SUBSTRING_TO_CAPTION
 *
 * 0x7199DFD024AA24F3

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} subString
 */
export function activityFeedAddLiteralSubstringToCaption(subString: string): void {
	const activityFeedAddLiteralSubstringToCaption_result = Citizen.invokeNative<void>('0x7199DFD024AA24F3', subString);
	return activityFeedAddLiteralSubstringToCaption_result;
}