/**
 * HUD:GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME_BYTES
 *
 * 0xE82BC2F91FAEEAE8

 * 
 * Returns a substring that is between two specified positions. The length of the string will be calculated using (endPosition - startPosition).
 * 
 * Example:
 * // Get "STRING" text from "MY_STRING"
 * subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME_BYTES("MY_STRING", 3, 9);
 * // Overflows are possibly replaced with underscores (needs verification)
 * subStr = HUD::GET_CHARACTER_FROM_AUDIO_CONVERSATION_FILENAME_BYTES("MY_STRING", 3, 10); // "STRING_"?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} text
 * @param {number} startPoint
 * @param {number} endPoint
 * @returns {string}  
 */
export function getCharacterFromAudioConversationFilenameBytes(text: string, startPoint: number, endPoint: number): string {
	const getCharacterFromAudioConversationFilenameBytes_result = Citizen.invokeNative<string>('0xE82BC2F91FAEEAE8', text, startPoint, endPoint);
	return getCharacterFromAudioConversationFilenameBytes_result;
}