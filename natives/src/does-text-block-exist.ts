/**
 * HUD:DOES_TEXT_BLOCK_EXIST
 *
 * 0x00F2D73E763510A4

 * 
 * ------------------------------------------------------------------
 * @param {string} textBlockName
 * @returns {boolean}  
 */
export function doesTextBlockExist(textBlockName: string): boolean {
	const doesTextBlockExist_result = Citizen.invokeNative<boolean>('0x00F2D73E763510A4', textBlockName);
	return doesTextBlockExist_result;
}