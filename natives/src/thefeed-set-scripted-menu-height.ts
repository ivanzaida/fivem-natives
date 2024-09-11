/**
 * HUD:THEFEED_SET_SCRIPTED_MENU_HEIGHT
 *
 * 0x043244A32AD6E17D

 * 
 * ------------------------------------------------------------------
 * @param {number} scriptedMenuHeight
 */
export function thefeedSetScriptedMenuHeight(scriptedMenuHeight: number): void {
	const thefeedSetScriptedMenuHeight_result = Citizen.invokeNative<void>('0x043244A32AD6E17D', scriptedMenuHeight);
	return thefeedSetScriptedMenuHeight_result;
}