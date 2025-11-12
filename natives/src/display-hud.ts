/**
 * HUD:DISPLAY_HUD
 *
 * 0x747786364137DC63

 * 
 * If Hud should be displayed
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} displayHudFlag
 */
export function displayHud(displayHudFlag: boolean): void {
	const displayHud_result = Citizen.invokeNative<void>('0x747786364137DC63', displayHudFlag);
	return displayHud_result;
}