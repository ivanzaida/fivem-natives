/**
 * HUD:SET_CUSTOM_MP_HUD_COLOR
 *
 * 0x34337F322B990169

 * 
 * Allows script to set a custom color for the MP HUD similar to how we change colors for the characters in MP.
 * Must be cleared when no longer used by passing -1 (HUD_COLOUR_INVALID).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} displayMode
 */
export function setCustomMpHudColor(displayMode: number): void {
	const setCustomMpHudColor_result = Citizen.invokeNative<void>('0x34337F322B990169', displayMode);
	return setCustomMpHudColor_result;
}