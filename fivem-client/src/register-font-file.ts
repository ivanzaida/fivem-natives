/**
 * CFX:REGISTER_FONT_FILE
 *
 * 0X1B3A363

 * Registers a specified .gfx file as GFx font library.The .gfx file has to be registered with the streamer already.
 * 
 * ------------------------------------------------------------------
 * @param {string} fileName The name of the .gfx file, without extension.
 */
export function registerFontFile(fileName: string): void {
	const registerFontFile_result = Citizen.invokeNative<void>('0X1B3A363', fileName);
	return registerFontFile_result;
}