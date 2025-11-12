import { ETextFonts } from '@ivanzaida/structures'

/**
 * HUD:SET_TEXT_FONT
 *
 * 0x8413CD3BCEEAD8DC

 * 
 * fonts that mess up your text where made for number values/misc stuff
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ETextFonts} textFont
 */
export function setTextFont(textFont: ETextFonts | number): void {
	const setTextFont_result = Citizen.invokeNative<void>('0x8413CD3BCEEAD8DC', textFont);
	return setTextFont_result;
}