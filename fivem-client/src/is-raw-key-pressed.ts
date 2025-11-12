/**
 * CFX:IS_RAW_KEY_PRESSED
 *
 * 0x69F7C29E

 * Gets if the specified `rawKeyIndex` is pressed on the keyboard.This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014)Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of pressed state.
 */
export function isRawKeyPressed(rawKeyIndex: number): boolean {
	const isRawKeyPressed_result = Citizen.invokeNative<boolean>('0x69F7C29E', rawKeyIndex);
	return isRawKeyPressed_result;
}