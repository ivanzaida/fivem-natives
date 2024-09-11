/**
 * HUD:PAUSE_MENU_DEACTIVATE_CONTEXT
 *
 * 0xB4CD52D6B8305BD4

 * 
 * ------------------------------------------------------------------
 * @param {number} contextHashToCheck
 */
export function pauseMenuDeactivateContext(contextHashToCheck: number): void {
	const pauseMenuDeactivateContext_result = Citizen.invokeNative<void>('0xB4CD52D6B8305BD4', contextHashToCheck);
	return pauseMenuDeactivateContext_result;
}