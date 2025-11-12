import { ScaleformIndex } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_TRANSITION_NEWS_SHOW
 *
 * 0x414AC8390B655576

 * 
 * Start and show the transition news.  If a news story hasn't been queued, it will queue one.
 * moveID to make requests for scaleform on
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ScaleformIndex} moveID
 * @returns {boolean}  
 */
export function scTransitionNewsShow(moveID: ScaleformIndex): boolean {
	const scTransitionNewsShow_result = Citizen.invokeNative<boolean>('0x414AC8390B655576', moveID);
	return scTransitionNewsShow_result;
}