/**
 * HUD:PAUSE_MENU_GET_MOUSE_HOVER_INDEX
 *
 * 0xF937D4DCF9CC1CF7

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function pauseMenuGetMouseHoverIndex(): number {
	const pauseMenuGetMouseHoverIndex_result = Citizen.invokeNative<number>('0xF937D4DCF9CC1CF7', );
	return pauseMenuGetMouseHoverIndex_result;
}