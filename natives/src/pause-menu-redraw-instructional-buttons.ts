/**
 * HUD:PAUSE_MENU_REDRAW_INSTRUCTIONAL_BUTTONS
 *
 * 0x3F85C0CA5FE1527D

 * 
 * Redraws the currently active menus instructional buttons.
 * Useful if you've adjusted contexts
 * DO NOT SPAM THIS. It'll force a redraw and look ugly and be slow and everyone will laugh at you
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} uniqueId (Mostly for futureproofing) if you need to override which index it thinks is active
 */
export function pauseMenuRedrawInstructionalButtons(uniqueId: number = 0): void {
	const pauseMenuRedrawInstructionalButtons_result = Citizen.invokeNative<void>('0x3F85C0CA5FE1527D', uniqueId);
	return pauseMenuRedrawInstructionalButtons_result;
}