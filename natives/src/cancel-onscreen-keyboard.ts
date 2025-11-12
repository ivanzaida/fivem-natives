/**
 * MISC:CANCEL_ONSCREEN_KEYBOARD
 *
 * 0x541EC9E98C2783B3

 * 
 * Cancels the onscreen keyboard
 * 
 * DO NOT use this as it doesn't clean up the text input box properly and your script will get stuck in the UPDATE_ONSCREEN_KEYBOARD() loop.
 * Use FORCE_CLOSE_TEXT_INPUT_BOX instead.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function cancelOnscreenKeyboard(): void {
	const cancelOnscreenKeyboard_result = Citizen.invokeNative<void>('0x541EC9E98C2783B3', );
	return cancelOnscreenKeyboard_result;
}