import { BinkMovieId } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_BINK_SHOULD_SKIP
 *
 * 0x068BA02ADFAA2B2F

 * 
 * ------------------------------------------------------------------
 * @param {BinkMovieId} movieId
 * @param {boolean} shouldSkip
 */
export function setBinkShouldSkip(movieId: BinkMovieId, shouldSkip: boolean): void {
	const setBinkShouldSkip_result = Citizen.invokeNative<void>('0x068BA02ADFAA2B2F', movieId, shouldSkip);
	return setBinkShouldSkip_result;
}