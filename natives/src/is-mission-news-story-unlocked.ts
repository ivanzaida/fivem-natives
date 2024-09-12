/**
 * AUDIO:IS_MISSION_NEWS_STORY_UNLOCKED
 *
 * 0x7D01976EF2600F1C

 * 
 * ------------------------------------------------------------------
 * @param {number} newsStoryId
 * @returns {boolean}  
 */
export function isMissionNewsStoryUnlocked(newsStoryId: number): boolean {
	const isMissionNewsStoryUnlocked_result = Citizen.invokeNative<boolean>('0x7D01976EF2600F1C', newsStoryId);
	return isMissionNewsStoryUnlocked_result;
}