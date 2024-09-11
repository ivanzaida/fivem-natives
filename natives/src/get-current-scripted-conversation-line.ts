/**
 * AUDIO:GET_CURRENT_SCRIPTED_CONVERSATION_LINE
 *
 * 0xE7365CC791D1E4EB

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCurrentScriptedConversationLine(): number {
	const getCurrentScriptedConversationLine_result = Citizen.invokeNative<number>('0xE7365CC791D1E4EB', );
	return getCurrentScriptedConversationLine_result;
}