import { EEKeyboardType } from '@ivanzaida/structures'

/**
 * MISC:DISPLAY_ONSCREEN_KEYBOARD_WITH_LONGER_INITIAL_STRING
 *
 * 0x305739C2F5BFA5D9

 * 
 * Variant of DISPLAY_ONSCREEN_KEYBOARD which takes up to eight strings to support an initial value of 500 characters
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEKeyboardType} keyboardTypeFlag
 * @param {string} prompt
 * @param {string} description
 * @param {string} initialValue1
 * @param {string} initialValue2
 * @param {string} initialValue3
 * @param {string} initialValue4
 * @param {string} initialValue5
 * @param {string} initialValue6
 * @param {string} initialValue7
 * @param {string} initialValue8
 * @param {number} maxLength
 */
export function displayOnscreenKeyboardWithLongerInitialString(keyboardTypeFlag: EEKeyboardType | number, prompt: string, description: string, initialValue1: string, initialValue2: string, initialValue3: string, initialValue4: string, initialValue5: string, initialValue6: string, initialValue7: string, initialValue8: string, maxLength: number): void {
	const displayOnscreenKeyboardWithLongerInitialString_result = Citizen.invokeNative<void>('0x305739C2F5BFA5D9', keyboardTypeFlag, prompt, description, initialValue1, initialValue2, initialValue3, initialValue4, initialValue5, initialValue6, initialValue7, initialValue8, maxLength);
	return displayOnscreenKeyboardWithLongerInitialString_result;
}