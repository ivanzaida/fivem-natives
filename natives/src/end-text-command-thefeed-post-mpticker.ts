/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_MPTICKER
 *
 * 0x438D03085FECB959

 * 
 * THIS COMMAND HAS BEEN DEPRECATED.  USE END_TEXT_COMMAND_THEFEED_POST_TICKER instead
 * Use in conjunction with THEFEED_SET_GAMER1_INFO and THEFEED_SET_GAMER2_INFO
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isImportant
 * @param {boolean} cacheMessage
 * @returns {number}  
 */
export function endTextCommandThefeedPostMpticker(isImportant: boolean, cacheMessage: boolean = true): number {
	const endTextCommandThefeedPostMpticker_result = Citizen.invokeNative<number>('0x438D03085FECB959', isImportant, cacheMessage);
	return endTextCommandThefeedPostMpticker_result;
}