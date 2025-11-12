/**
 * CFX:IS_RAW_KEY_DOWN
 *
 * 0xD95A7387

 * Gets if the specified `rawKeyIndex` is pressed down on the keyboard.This will not be triggered if the key is disabled with [DISABLE_RAW_KEY_THIS_FRAME](#_0x8BCF0014)Virtual key codes can be found [here](https://learn.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes)
 * 
 * ------------------------------------------------------------------
 * @param {number} rawKeyIndex Index of raw key from keyboard.
 * @returns {boolean}  Returns bool value of down state.
 */
export function isRawKeyDown(rawKeyIndex: number): boolean {
	const isRawKeyDown_result = Citizen.invokeNative<boolean>('0xD95A7387', rawKeyIndex);
	return isRawKeyDown_result;
}