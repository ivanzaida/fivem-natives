/**
 * HUD:SET_ALLOW_COMMA_ON_TEXT_INPUT
 *
 * 0x283E9A39F4EE4D14

 * 
 * Must be set before opening the text input box. Will automatically return to false once the text input box closes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowComma
 */
export function setAllowCommaOnTextInput(allowComma: boolean): void {
	const setAllowCommaOnTextInput_result = Citizen.invokeNative<void>('0x283E9A39F4EE4D14', allowComma);
	return setAllowCommaOnTextInput_result;
}