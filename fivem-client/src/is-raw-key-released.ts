/**
 * CFX:IS_RAW_KEY_RELEASED
 *
 * 0xEAA50861

 * Gets if the specified `rawKeyIndex` was just released on the keyboard.This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014)Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of released state.
 */
export function isRawKeyReleased(rawKeyIndex: number): boolean {
	const isRawKeyReleased_result = Citizen.invokeNative<boolean>('0xEAA50861', rawKeyIndex);
	return isRawKeyReleased_result;
}