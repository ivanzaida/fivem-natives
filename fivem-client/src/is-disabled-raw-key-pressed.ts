/**
 * CFX:IS_DISABLED_RAW_KEY_PRESSED
 *
 * 0x1F7CBBAA

 * Gets if the specified `rawKeyIndex` is pressed, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014).Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of pressed state.
 */
export function isDisabledRawKeyPressed(rawKeyIndex: number): boolean {
	const isDisabledRawKeyPressed_result = Citizen.invokeNative<boolean>('0x1F7CBBAA', rawKeyIndex);
	return isDisabledRawKeyPressed_result;
}