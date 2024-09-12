/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_TICKER
 *
 * 0x25ABFB435E16C7D9

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isImportant
 * @param {boolean} cacheMessage
 * @returns {number}  
 */
export function endTextCommandThefeedPostTicker(isImportant: boolean, cacheMessage: boolean = true): number {
	const endTextCommandThefeedPostTicker_result = Citizen.invokeNative<number>('0x25ABFB435E16C7D9', isImportant, cacheMessage);
	return endTextCommandThefeedPostTicker_result;
}