import { EFontBitField } from '@ivanzaida/structures'

/**
 * MISC:NEXT_ONSCREEN_KEYBOARD_RESULT_WILL_DISPLAY_USING_THESE_FONTS
 *
 * 0x8CB5613E14D44228

 * 
 * Call this command before displaying the onscreen keyboard so that any characters that aren't supported in all the fonts can be replaced with a space character.
 * The bit field will only apply to the next time the onscreen keyboard is displayed.
 * 
 * p0 was always 2 in R scripts.
 * Called before calling DISPLAY_ONSCREEN_KEYBOARD if the input needs to be saved.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EFontBitField} fontBitField
 */
export function nextOnscreenKeyboardResultWillDisplayUsingTheseFonts(fontBitField: EFontBitField | number): void {
	const nextOnscreenKeyboardResultWillDisplayUsingTheseFonts_result = Citizen.invokeNative<void>('0x8CB5613E14D44228', fontBitField);
	return nextOnscreenKeyboardResultWillDisplayUsingTheseFonts_result;
}