/**
 * AUDIO:SKIP_TO_NEXT_SCRIPTED_CONVERSATION_LINE
 *
 * 0x329FFB0BB004FDEE

 * 
 * ------------------------------------------------------------------
 */
export function skipToNextScriptedConversationLine(): void {
	const skipToNextScriptedConversationLine_result = Citizen.invokeNative<void>('0x329FFB0BB004FDEE', );
	return skipToNextScriptedConversationLine_result;
}