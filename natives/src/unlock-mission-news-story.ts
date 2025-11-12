/**
 * AUDIO:UNLOCK_MISSION_NEWS_STORY
 *
 * 0x5A0A1BD816B9AAB5

 * 
 * "news" that play on the radio after you've done something in story mode(?)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newsStoryId
 */
export function unlockMissionNewsStory(newsStoryId: number): void {
	const unlockMissionNewsStory_result = Citizen.invokeNative<void>('0x5A0A1BD816B9AAB5', newsStoryId);
	return unlockMissionNewsStory_result;
}