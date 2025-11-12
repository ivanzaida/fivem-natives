/**
 * CFX:IS_RAW_KEY_UP
 *
 * 0x36F4E505

 * Gets if the specified `rawKeyIndex` is up  on the keyboard.This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014)Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of up state.
 */
export function isRawKeyUp(rawKeyIndex: number): boolean {
	const isRawKeyUp_result = Citizen.invokeNative<boolean>('0x36F4E505', rawKeyIndex);
	return isRawKeyUp_result;
}