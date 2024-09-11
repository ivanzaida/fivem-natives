/**
 * HUD:SET_PAUSE_MENU_ACTIVE
 *
 * 0x915FA95E87D33FF5

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setPauseMenuActive(active: boolean): void {
	const setPauseMenuActive_result = Citizen.invokeNative<void>('0x915FA95E87D33FF5', active);
	return setPauseMenuActive_result;
}