/**
 * MISC:GET_ONSCREEN_KEYBOARD_RESULT
 *
 * 0x43FB09E8020180EA

 * 
 * Returns the text that the player last entered in the onscreen keyboard
 * 
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getOnscreenKeyboardResult(): string {
	const getOnscreenKeyboardResult_result = Citizen.invokeNative<string>('0x43FB09E8020180EA', );
	return getOnscreenKeyboardResult_result;
}