import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_TRANSITION_NEWS_SHOW_TIMED
 *
 * 0xB5F751D7204D8B1A

 * 
 * Start and show the transition news.  If a news story hasn't been queued, it will queue one.
 * moveID - to make requests for scaleform on
 * iStoryOnscreenDuration - the amount of time (in ms) to display each story for.  If this value == 0, then the news controller will only show one news item and never transition to another.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} moveID
 * @param {number} storyOnscreenDuration
 * @returns {boolean}  
 */
export function scTransitionNewsShowTimed(moveID: ScaleformIndex, storyOnscreenDuration: number): boolean {
	const scTransitionNewsShowTimed_result = Citizen.invokeNative<boolean>('0xB5F751D7204D8B1A', moveID, storyOnscreenDuration);
	return scTransitionNewsShowTimed_result;
}