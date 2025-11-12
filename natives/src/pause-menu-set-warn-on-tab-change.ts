/**
 * HUD:PAUSE_MENU_SET_WARN_ON_TAB_CHANGE
 *
 * 0x2FDCBFEEE3E1CA38

 * 
 * Tells the pause menu to throw up a warning if you try to change tabs
 * Mostly used for when you're menucepted deep and don't want to lose any progress.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} warn
 */
export function pauseMenuSetWarnOnTabChange(warn: boolean): void {
	const pauseMenuSetWarnOnTabChange_result = Citizen.invokeNative<void>('0x2FDCBFEEE3E1CA38', warn);
	return pauseMenuSetWarnOnTabChange_result;
}