/**
 * AUDIO:STOP_SCRIPTED_CONVERSATION
 *
 * 0x0F15249D24BC5ADA

 * 
 * ------------------------------------------------------------------
 * @param {boolean} finishCurrentLine
 * @returns {number}  
 */
export function stopScriptedConversation(finishCurrentLine: boolean): number {
	const stopScriptedConversation_result = Citizen.invokeNative<number>('0x0F15249D24BC5ADA', finishCurrentLine);
	return stopScriptedConversation_result;
}