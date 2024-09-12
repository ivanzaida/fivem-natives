/**
 * HUD:PAUSE_MENU_IS_CONTEXT_ACTIVE
 *
 * 0xBFF989187F281795

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHashToCheck
 * @returns {boolean}  
 */
export function pauseMenuIsContextActive(contextHashToCheck: number): boolean {
	const pauseMenuIsContextActive_result = Citizen.invokeNative<boolean>('0xBFF989187F281795', contextHashToCheck);
	return pauseMenuIsContextActive_result;
}