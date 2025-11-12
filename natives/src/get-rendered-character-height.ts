import { ETextFonts } from '@ivanzaida/structures'

/**
 * HUD:GET_RENDERED_CHARACTER_HEIGHT
 *
 * 0x3D634C7F6A6D4CA4

 * 
 * This gets the height of the FONT and not the total text. You need to get the number of lines your text uses, and get the height of a newline (I'm using a smaller value) to get the total text height.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} textYScale
 * @param {ETextFonts} textFont
 * @returns {number}  
 */
export function getRenderedCharacterHeight(textYScale: number = 1, textFont: ETextFonts | number = 0): number {
	const getRenderedCharacterHeight_result = Citizen.invokeNative<number>('0x3D634C7F6A6D4CA4', textYScale, textFont);
	return getRenderedCharacterHeight_result;
}