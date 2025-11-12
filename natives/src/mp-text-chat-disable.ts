/**
 * HUD:MP_TEXT_CHAT_DISABLE
 *
 * 0xF111804437599169

 * 
 * Lets script disable the text chat box.
 * Please remember to call MP_TEXT_CHAT_DISABLE(FALSE) when you're done.
 * 
 * Hides the chat history, closes the input box and makes it unable to be opened unless called again with FALSE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isTeamJob
 */
export function mpTextChatDisable(isTeamJob: boolean): void {
	const mpTextChatDisable_result = Citizen.invokeNative<void>('0xF111804437599169', isTeamJob);
	return mpTextChatDisable_result;
}