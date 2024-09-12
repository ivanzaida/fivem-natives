/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_UNLOCK
 *
 * 0x7A7782BC954C994B

 * 
 * ------------------------------------------------------------------
 * @param {string} titleString
 * @param {number} iconType
 * @param {string} fullBodyString DEPRECATED, DO NOT USE
 * @returns {number}  
 */
export function endTextCommandThefeedPostUnlock(titleString: string, iconType: number = 0, fullBodyString: string = null!): number {
	const endTextCommandThefeedPostUnlock_result = Citizen.invokeNative<number>('0x7A7782BC954C994B', titleString, iconType, fullBodyString);
	return endTextCommandThefeedPostUnlock_result;
}