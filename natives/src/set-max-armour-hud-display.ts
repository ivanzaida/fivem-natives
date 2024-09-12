/**
 * HUD:SET_MAX_ARMOUR_HUD_DISPLAY
 *
 * 0xEA2F24FFC9F29EDD

 * 
 * ------------------------------------------------------------------
 * @param {number} maxDisplay
 */
export function setMaxArmourHudDisplay(maxDisplay: number): void {
	const setMaxArmourHudDisplay_result = Citizen.invokeNative<void>('0xEA2F24FFC9F29EDD', maxDisplay);
	return setMaxArmourHudDisplay_result;
}