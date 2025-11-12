/**
 * CFX:DISABLE_RAW_KEY_THIS_FRAME
 *
 * 0x8BCF0014

 * Disables the specified `rawKeyIndex`, making it not trigger the regular `IS_RAW_KEY_` natives.Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of down state.
 */
export function disableRawKeyThisFrame(rawKeyIndex: number): boolean {
	const disableRawKeyThisFrame_result = Citizen.invokeNative<boolean>('0x8BCF0014', rawKeyIndex);
	return disableRawKeyThisFrame_result;
}