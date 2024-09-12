/**
 * HUD:PAUSE_MENU_IS_CONTEXT_MENU_ACTIVE
 *
 * 0xDD222CF39CF79FE4

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function pauseMenuIsContextMenuActive(): boolean {
	const pauseMenuIsContextMenuActive_result = Citizen.invokeNative<boolean>('0xDD222CF39CF79FE4', );
	return pauseMenuIsContextMenuActive_result;
}