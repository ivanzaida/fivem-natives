/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_KEYBOARD_DISPLAY
 *
 * 0xB993F5B7A74B2A85

 * 
 * For scripts with an onscreen keyboard, use this to display the resulting string.
 * Use ~a~ to mark the position in your line of text where you want this substring inserted
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} stringContainingKeysTypedByPlayer
 */
export function addTextComponentSubstringKeyboardDisplay(stringContainingKeysTypedByPlayer: string): void {
	const addTextComponentSubstringKeyboardDisplay_result = Citizen.invokeNative<void>('0xB993F5B7A74B2A85', stringContainingKeysTypedByPlayer);
	return addTextComponentSubstringKeyboardDisplay_result;
}