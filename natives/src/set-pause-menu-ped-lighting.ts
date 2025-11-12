/**
 * HUD:SET_PAUSE_MENU_PED_LIGHTING
 *
 * 0xA6B472383DA6AE23

 * 
 * Toggles the light state for the pause menu ped in frontend menus.
 * 
 * This is used by R in combination with `SET_PAUSE_MENU_PED_SLEEP_STATE` to toggle the "offline" or "online" state in the "friends" tab of the pause menu in GTA Online.
 * 
 * 
 * Example:
 * Lights On: https://vespura.com/hi/i/2019-04-01_16-09_540ee_1015.png
 * Lights Off: https://vespura.com/hi/i/2019-04-01_16-10_8b5e7_1016.png
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enableLighting
 */
export function setPauseMenuPedLighting(enableLighting: boolean): void {
	const setPauseMenuPedLighting_result = Citizen.invokeNative<void>('0xA6B472383DA6AE23', enableLighting);
	return setPauseMenuPedLighting_result;
}