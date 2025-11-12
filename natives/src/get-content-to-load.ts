/**
 * MISC:GET_CONTENT_TO_LOAD
 *
 * 0x3DF0567938549C05

 * 
 * Gets the content name to load when the game is launched.
 * 
 * Returns pointer to an empty string.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getContentToLoad(): string {
	const getContentToLoad_result = Citizen.invokeNative<string>('0x3DF0567938549C05', );
	return getContentToLoad_result;
}