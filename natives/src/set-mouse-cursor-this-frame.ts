/**
 * HUD:SET_MOUSE_CURSOR_THIS_FRAME
 *
 * 0xA6DB7FC56DBDFB82

 * 
 * Shows the cursor on screen for one frame.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setMouseCursorThisFrame(): void {
	const setMouseCursorThisFrame_result = Citizen.invokeNative<void>('0xA6DB7FC56DBDFB82', );
	return setMouseCursorThisFrame_result;
}