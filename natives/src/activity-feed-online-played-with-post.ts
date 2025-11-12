/**
 * MISC:ACTIVITY_FEED_ONLINE_PLAYED_WITH_POST
 *
 * 0x41DBD10907A5CF18

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * Used only once in the scripts (ingamehud) with p0 = "AF_GAMEMODE"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} gameMode
 */
export function activityFeedOnlinePlayedWithPost(gameMode: string): void {
	const activityFeedOnlinePlayedWithPost_result = Citizen.invokeNative<void>('0x41DBD10907A5CF18', gameMode);
	return activityFeedOnlinePlayedWithPost_result;
}