/**
 * AUDIO:START_SCRIPT_CONVERSATION
 *
 * 0xA406335199BF1001

 * 
 * ------------------------------------------------------------------
 * @param {boolean} displaySubtitles
 * @param {boolean} addToBriefScreen
 * @param {boolean} cloneConversation
 * @param {boolean} interruptible
 */
export function startScriptConversation(displaySubtitles: boolean, addToBriefScreen: boolean = true, cloneConversation: boolean = false, interruptible: boolean = true): void {
	const startScriptConversation_result = Citizen.invokeNative<void>('0xA406335199BF1001', displaySubtitles, addToBriefScreen, cloneConversation, interruptible);
	return startScriptConversation_result;
}