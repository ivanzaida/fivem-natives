/**
 * HUD:GET_FILENAME_FOR_AUDIO_CONVERSATION
 *
 * 0xFACCDE46E24AD056

 * 
 * Gets a string literal from a label name.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textLabelOfAudioConversation
 * @returns {string}  
 */
export function getFilenameForAudioConversation(textLabelOfAudioConversation: string): string {
	const getFilenameForAudioConversation_result = Citizen.invokeNative<string>('0xFACCDE46E24AD056', textLabelOfAudioConversation);
	return getFilenameForAudioConversation_result;
}