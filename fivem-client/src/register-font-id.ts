/**
 * CFX:REGISTER_FONT_ID
 *
 * 0XACF6D8EE

 * Registers a specified font name for use with text draw commands.
 * 
 * ------------------------------------------------------------------
 * @param {string} fontName The name of the font in the GFx font library.
 * @returns {number}  An index to use with [SET\_TEXT\_FONT](#_0x66E0276CC5F6B9DA) and similar natives.
 */
export function registerFontId(fontName: string): number {
	const registerFontId_result = Citizen.invokeNative<number>('0XACF6D8EE', fontName);
	return registerFontId_result;
}