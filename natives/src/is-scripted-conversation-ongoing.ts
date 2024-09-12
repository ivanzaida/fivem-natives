/**
 * AUDIO:IS_SCRIPTED_CONVERSATION_ONGOING
 *
 * 0x1F9EB85925C3ECD7

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScriptedConversationOngoing(): boolean {
	const isScriptedConversationOngoing_result = Citizen.invokeNative<boolean>('0x1F9EB85925C3ECD7', );
	return isScriptedConversationOngoing_result;
}