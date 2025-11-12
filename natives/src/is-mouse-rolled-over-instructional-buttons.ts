/**
 * HUD:IS_MOUSE_ROLLED_OVER_INSTRUCTIONAL_BUTTONS
 *
 * 0x2135EF5011FECD68

 * 
 * Returns TRUE if mouse is hovering above instructional buttons. Works with all buttons gfx, such as popup_warning, pause_menu_instructional_buttons, instructional_buttons, etc. Note: You have to call TOGGLE_MOUSE_BUTTONS on the scaleform if you want this native to work.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMouseRolledOverInstructionalButtons(): boolean {
	const isMouseRolledOverInstructionalButtons_result = Citizen.invokeNative<boolean>('0x2135EF5011FECD68', );
	return isMouseRolledOverInstructionalButtons_result;
}