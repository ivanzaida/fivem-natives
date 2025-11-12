/**
 * HUD:SET_MOUSE_CURSOR_VISIBLE
 *
 * 0x26BBBC01C3E132A7

 * 
 * Shows/hides the frontend cursor on the pause menu or similar menus.
 * Clicking off and then on the game window will show it again.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} visible
 */
export function setMouseCursorVisible(visible: boolean): void {
	const setMouseCursorVisible_result = Citizen.invokeNative<void>('0x26BBBC01C3E132A7', visible);
	return setMouseCursorVisible_result;
}