/**
 * HUD:GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME
 *
 * 0xA4FC5B871651C9F9

 * 
 * Returns a substring of a specified length starting at a specified position.
 * 
 * Example:
 * // Get "STRING" text from "MY_STRING"
 * subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME("MY_STRING", 3, 6);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} text
 * @param {number} startPoint
 * @param {number} endPoint
 * @returns {string}  
 */
export function getCharacterFromAudioConversationFilename(text: string, startPoint: number, endPoint: number): string {
	const getCharacterFromAudioConversationFilename_result = Citizen.invokeNative<string>('0xA4FC5B871651C9F9', text, startPoint, endPoint);
	return getCharacterFromAudioConversationFilename_result;
}