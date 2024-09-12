/**
 * AUDIO:START_SCRIPT_PHONE_CONVERSATION
 *
 * 0xABC27367E50604B7

 * 
 * ------------------------------------------------------------------
 * @param {boolean} displaySubtitles
 * @param {boolean} addToBriefScreen
 */
export function startScriptPhoneConversation(displaySubtitles: boolean, addToBriefScreen: boolean = true): void {
	const startScriptPhoneConversation_result = Citizen.invokeNative<void>('0xABC27367E50604B7', displaySubtitles, addToBriefScreen);
	return startScriptPhoneConversation_result;
}