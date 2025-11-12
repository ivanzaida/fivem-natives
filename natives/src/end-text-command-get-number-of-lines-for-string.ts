/**
 * HUD:END_TEXT_COMMAND_GET_NUMBER_OF_LINES_FOR_STRING
 *
 * 0x83FBFC2ED3CA1611

 * 
 * Determines how many lines the text string will use when drawn on screen.
 * Must use 0x521FB041D93DD0E4 for setting up
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} displayAtX
 * @param {number} displayAtY
 * @returns {number}  
 */
export function endTextCommandGetNumberOfLinesForString(displayAtX: number, displayAtY: number): number {
	const endTextCommandGetNumberOfLinesForString_result = Citizen.invokeNative<number>('0x83FBFC2ED3CA1611', displayAtX, displayAtY);
	return endTextCommandGetNumberOfLinesForString_result;
}