/**
 * HUD:PAUSE_MENU_GET_MOUSE_HOVER_UNIQUE_ID
 *
 * 0x4E537871D44AC56E

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function pauseMenuGetMouseHoverUniqueId(): number {
	const pauseMenuGetMouseHoverUniqueId_result = Citizen.invokeNative<number>('0x4E537871D44AC56E', );
	return pauseMenuGetMouseHoverUniqueId_result;
}