/**
 * AUDIO:PAUSE_SCRIPTED_CONVERSATION
 *
 * 0xF329B991CDE087C7

 * 
 * ------------------------------------------------------------------
 * @param {boolean} finishCurrentLine
 */
export function pauseScriptedConversation(finishCurrentLine: boolean): void {
	const pauseScriptedConversation_result = Citizen.invokeNative<void>('0xF329B991CDE087C7', finishCurrentLine);
	return pauseScriptedConversation_result;
}