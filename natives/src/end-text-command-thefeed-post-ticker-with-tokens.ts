/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_TICKER_WITH_TOKENS
 *
 * 0x1962888D78D95402

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isImportant
 * @param {boolean} cacheMessage TRUE
 * @returns {number}  
 */
export function endTextCommandThefeedPostTickerWithTokens(isImportant: boolean, cacheMessage: boolean = true): number {
	const endTextCommandThefeedPostTickerWithTokens_result = Citizen.invokeNative<number>('0x1962888D78D95402', isImportant, cacheMessage);
	return endTextCommandThefeedPostTickerWithTokens_result;
}