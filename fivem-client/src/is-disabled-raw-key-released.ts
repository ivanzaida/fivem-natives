/**
 * CFX:IS_DISABLED_RAW_KEY_RELEASED
 *
 * 0x72B66C09

 * Gets if the specified `rawKeyIndex` was released, even if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014).Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of released state.
 */
export function isDisabledRawKeyReleased(rawKeyIndex: number): boolean {
	const isDisabledRawKeyReleased_result = Citizen.invokeNative<boolean>('0x72B66C09', rawKeyIndex);
	return isDisabledRawKeyReleased_result;
}