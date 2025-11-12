/**
 * HUD:SET_PAUSE_MENU_PED_SLEEP_STATE
 *
 * 0xE98A31D3C1927ED6

 * 
 * Toggles the pause menu ped sleep state for frontend menus.
 * 
 * Example: https://vespura.com/hi/i/2019-04-01_15-51_8ed38_1014.gif
 * 
 * `state` 0 will make the ped slowly fall asleep, 1 will slowly wake the ped up.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isAwake
 */
export function setPauseMenuPedSleepState(isAwake: boolean): void {
	const setPauseMenuPedSleepState_result = Citizen.invokeNative<void>('0xE98A31D3C1927ED6', isAwake);
	return setPauseMenuPedSleepState_result;
}