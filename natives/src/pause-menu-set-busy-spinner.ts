/**
 * HUD:PAUSE_MENU_SET_BUSY_SPINNER
 *
 * 0x8307BFA58BB45ED9

 * 
 * ------------------------------------------------------------------
 * @param {boolean} visible
 * @param {number} columnID
 * @param {number} spinner
 */
export function pauseMenuSetBusySpinner(visible: boolean, columnID: number = 1, spinner: number = 0): void {
	const pauseMenuSetBusySpinner_result = Citizen.invokeNative<void>('0x8307BFA58BB45ED9', visible, columnID, spinner);
	return pauseMenuSetBusySpinner_result;
}