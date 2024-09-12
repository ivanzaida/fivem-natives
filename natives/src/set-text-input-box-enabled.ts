/**
 * HUD:SET_TEXT_INPUT_BOX_ENABLED
 *
 * 0x19F42FEE708FB281

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function setTextInputBoxEnabled(enabled: boolean): void {
	const setTextInputBoxEnabled_result = Citizen.invokeNative<void>('0x19F42FEE708FB281', enabled);
	return setTextInputBoxEnabled_result;
}