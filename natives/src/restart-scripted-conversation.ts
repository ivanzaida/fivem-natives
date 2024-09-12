/**
 * AUDIO:RESTART_SCRIPTED_CONVERSATION
 *
 * 0xC78B293A5F4EACF9

 * 
 * ------------------------------------------------------------------
 */
export function restartScriptedConversation(): void {
	const restartScriptedConversation_result = Citizen.invokeNative<void>('0xC78B293A5F4EACF9', );
	return restartScriptedConversation_result;
}