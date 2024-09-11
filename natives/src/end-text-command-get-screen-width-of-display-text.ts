/**
 * HUD:END_TEXT_COMMAND_GET_SCREEN_WIDTH_OF_DISPLAY_TEXT
 *
 * 0x43026780D77E3DC0

 * 
 * ------------------------------------------------------------------
 * @param {boolean} includeSpaces
 * @returns {number}  
 */
export function endTextCommandGetScreenWidthOfDisplayText(includeSpaces: boolean): number {
	const endTextCommandGetScreenWidthOfDisplayText_result = Citizen.invokeNative<number>('0x43026780D77E3DC0', includeSpaces);
	return endTextCommandGetScreenWidthOfDisplayText_result;
}