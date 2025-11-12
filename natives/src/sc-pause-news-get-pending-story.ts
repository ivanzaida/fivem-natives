import { NewsStoryData } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_PAUSE_NEWS_GET_PENDING_STORY
 *
 * 0xAB564B6E85995DBB

 * 
 * Call this only once, and check return value before using data.
 * WARNING:
 * DO NOT STORE SC_NEWS_STORY_DATA!  You should retrieve the data, and operate on it immediately.
 * 
 * Fills some 0x30 sized struct
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NewsStoryData} newsStoryData [Ref]
 * @returns {boolean}  
 */
export function scPauseNewsGetPendingStory(newsStoryData: NewsStoryData /* ptr */): boolean {
	const scPauseNewsGetPendingStory_result = Citizen.invokeNative<boolean>('0xAB564B6E85995DBB', newsStoryData.dataView);
	return scPauseNewsGetPendingStory_result;
}