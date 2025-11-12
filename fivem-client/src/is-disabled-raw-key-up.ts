/**
 * CFX:IS_DISABLED_RAW_KEY_UP
 *
 * 0x2C033875

 * Gets if the specified `rawKeyIndex` is up, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014).Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of up state.
 */
export function isDisabledRawKeyUp(rawKeyIndex: number): boolean {
	const isDisabledRawKeyUp_result = Citizen.invokeNative<boolean>('0x2C033875', rawKeyIndex);
	return isDisabledRawKeyUp_result;
}