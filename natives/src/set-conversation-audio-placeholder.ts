/**
 * AUDIO:SET_CONVERSATION_AUDIO_PLACEHOLDER
 *
 * 0xC5C39679B6570380

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isPlaceholder
 */
export function setConversationAudioPlaceholder(isPlaceholder: boolean): void {
	const setConversationAudioPlaceholder_result = Citizen.invokeNative<void>('0xC5C39679B6570380', isPlaceholder);
	return setConversationAudioPlaceholder_result;
}