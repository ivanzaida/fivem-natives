import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:END_TEXT_COMMAND_THEFEED_POST_UNLOCK_TU_WITH_COLOR
 *
 * 0x54CF97A068ED5618

 * 
 * ------------------------------------------------------------------
 * @param {string} titleString
 * @param {number} iconType
 * @param {string} fullBodyString The full unlock body string to use for the pause menu
 * @param {boolean} isImportant
 * @param {EHudColours} titleColour
 * @param {boolean} titleIsLiteral
 * @returns {number}  
 */
export function endTextCommandThefeedPostUnlockTuWithColor(titleString: string, iconType: number = 0, fullBodyString: string = null!, isImportant: boolean = false, titleColour: EHudColours | number = 0, titleIsLiteral: boolean = true): number {
	const endTextCommandThefeedPostUnlockTuWithColor_result = Citizen.invokeNative<number>('0x54CF97A068ED5618', titleString, iconType, fullBodyString, isImportant, titleColour, titleIsLiteral);
	return endTextCommandThefeedPostUnlockTuWithColor_result;
}