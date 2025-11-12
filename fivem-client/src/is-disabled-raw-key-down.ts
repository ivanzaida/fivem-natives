/**
 * CFX:IS_DISABLED_RAW_KEY_DOWN
 *
 * 0x36366EC3

 * Gets if the specified `rawKeyIndex` is pressed down, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014).Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of down state.
 */
export function isDisabledRawKeyDown(rawKeyIndex: number): boolean {
	const isDisabledRawKeyDown_result = Citizen.invokeNative<boolean>('0x36366EC3', rawKeyIndex);
	return isDisabledRawKeyDown_result;
}