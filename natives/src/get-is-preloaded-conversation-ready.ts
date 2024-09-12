/**
 * AUDIO:GET_IS_PRELOADED_CONVERSATION_READY
 *
 * 0x22258A5EB34183DC

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsPreloadedConversationReady(): boolean {
	const getIsPreloadedConversationReady_result = Citizen.invokeNative<boolean>('0x22258A5EB34183DC', );
	return getIsPreloadedConversationReady_result;
}