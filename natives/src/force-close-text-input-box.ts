/**
 * HUD:FORCE_CLOSE_TEXT_INPUT_BOX
 *
 * 0x11FFB143F448979C

 * 
 * ------------------------------------------------------------------
 */
export function forceCloseTextInputBox(): void {
	const forceCloseTextInputBox_result = Citizen.invokeNative<void>('0x11FFB143F448979C', );
	return forceCloseTextInputBox_result;
}