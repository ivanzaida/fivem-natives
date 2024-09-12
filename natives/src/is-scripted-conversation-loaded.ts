/**
 * AUDIO:IS_SCRIPTED_CONVERSATION_LOADED
 *
 * 0xF7C641B5F6AF0A82

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScriptedConversationLoaded(): boolean {
	const isScriptedConversationLoaded_result = Citizen.invokeNative<boolean>('0xF7C641B5F6AF0A82', );
	return isScriptedConversationLoaded_result;
}