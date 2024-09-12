/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_UNLOCK_TU
 *
 * 0xC98870E86912B9E0

 * 
 * ------------------------------------------------------------------
 * @param {string} titleString
 * @param {number} iconType
 * @param {string} fullBodyString DEPRECATED, DO NOT USE
 * @param {boolean} isImportant TRUE
 * @returns {number}  
 */
export function endTextCommandThefeedPostUnlockTu(titleString: string, iconType: number = 0, fullBodyString: string = null!, isImportant: boolean = false): number {
	const endTextCommandThefeedPostUnlockTu_result = Citizen.invokeNative<number>('0xC98870E86912B9E0', titleString, iconType, fullBodyString, isImportant);
	return endTextCommandThefeedPostUnlockTu_result;
}