/**
 * AUDIO:PRELOAD_SCRIPT_PHONE_CONVERSATION
 *
 * 0x4FF8DE2B4C376BE4

 * 
 * ------------------------------------------------------------------
 * @param {boolean} displaySubtitles
 * @param {boolean} addToBriefScreen
 */
export function preloadScriptPhoneConversation(displaySubtitles: boolean, addToBriefScreen: boolean = true): void {
	const preloadScriptPhoneConversation_result = Citizen.invokeNative<void>('0x4FF8DE2B4C376BE4', displaySubtitles, addToBriefScreen);
	return preloadScriptPhoneConversation_result;
}