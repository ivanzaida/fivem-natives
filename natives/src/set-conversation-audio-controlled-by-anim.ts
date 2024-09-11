/**
 * AUDIO:SET_CONVERSATION_AUDIO_CONTROLLED_BY_ANIM
 *
 * 0x6CBE32FD4ABF9B73

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setConversationAudioControlledByAnim(enable: boolean): void {
	const setConversationAudioControlledByAnim_result = Citizen.invokeNative<void>('0x6CBE32FD4ABF9B73', enable);
	return setConversationAudioControlledByAnim_result;
}