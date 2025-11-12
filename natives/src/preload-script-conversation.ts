/**
 * AUDIO:PRELOAD_SCRIPT_CONVERSATION
 *
 * 0x4082E7EF621D1686

 * 
 * Similar to START_SCRIPT_CONVERSATION, except that is starts the conversation off paused.  A scripter can then kick off the conversation
 * by calling START_PRELOADED_CONVERSATION.  If they want to check that the conversation is done preloading, they can use GET_IS_PRELOADED_CONVERSATION_READY
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} displaySubtitles
 * @param {boolean} addToBriefScreen
 * @param {boolean} cloneConversation
 * @param {boolean} interruptible
 */
export function preloadScriptConversation(displaySubtitles: boolean, addToBriefScreen: boolean = true, cloneConversation: boolean = false, interruptible: boolean = true): void {
	const preloadScriptConversation_result = Citizen.invokeNative<void>('0x4082E7EF621D1686', displaySubtitles, addToBriefScreen, cloneConversation, interruptible);
	return preloadScriptConversation_result;
}