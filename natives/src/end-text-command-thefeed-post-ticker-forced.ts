/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_TICKER_FORCED
 *
 * 0x320F2F5B5607E425

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isImportant
 * @param {boolean} cacheMessage
 * @returns {number}  
 */
export function endTextCommandThefeedPostTickerForced(isImportant: boolean, cacheMessage: boolean = true): number {
	const endTextCommandThefeedPostTickerForced_result = Citizen.invokeNative<number>('0x320F2F5B5607E425', isImportant, cacheMessage);
	return endTextCommandThefeedPostTickerForced_result;
}