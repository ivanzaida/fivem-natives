/**
 * HUD:PAUSE_MENU_ACTIVATE_CONTEXT
 *
 * 0x9BC444D671469DCD

 * 
 * PAUSE_MENU_ACTIVATE_CONTEXT( HASH("ThisContext") ), can later be queried by PauseMenu.XML or script
 * 
 * Activates the specified frontend menu context.
 * pausemenu.xml defines some specific menu options using 'context'. Context is basically a 'condition'.
 * The `ALL` part of the context means that whatever is being defined, will be active when any or all of those conditions after `ALL` are met.
 * The `NONE` part of the context section means that whatever is being defined, will NOT be active if any or all of the conditions after `NONE` are met.
 * This basically allows you to hide certain menu sections, or things like instructional buttons.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} contextHashToCheck
 */
export function pauseMenuActivateContext(contextHashToCheck: number): void {
	const pauseMenuActivateContext_result = Citizen.invokeNative<void>('0x9BC444D671469DCD', contextHashToCheck);
	return pauseMenuActivateContext_result;
}