/**
 * HUD:HUD_SHOWING_CHARACTER_SWITCH_SELECTION
 *
 * 0xED8161DA7D783683

 * 
 * Sets a global that disables many weapon input tasks (shooting, aiming, etc.). Does not work with vehicle weapons, only used in selector.ysc
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOrOff
 */
export function hudShowingCharacterSwitchSelection(onOrOff: boolean): void {
	const hudShowingCharacterSwitchSelection_result = Citizen.invokeNative<void>('0xED8161DA7D783683', onOrOff);
	return hudShowingCharacterSwitchSelection_result;
}