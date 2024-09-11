/**
 * HUD:SHOW_CONTACT_INSTRUCTIONAL_BUTTON
 *
 * 0x4BA996FCD0F9D100

 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function showContactInstructionalButton(value: boolean): void {
	const showContactInstructionalButton_result = Citizen.invokeNative<void>('0x4BA996FCD0F9D100', value);
	return showContactInstructionalButton_result;
}