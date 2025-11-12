/**
 * NETWORK:NETWORK_TEXT_CHAT_IS_TYPING
 *
 * 0xA43CD45F18522E3F

 * 
 * Returns TRUE when the text chat entry box is visible.
 * 
 * Same as _IS_TEXT_CHAT_ACTIVE, except it does not check if the text chat HUD component is initialized, and therefore may crash.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkTextChatIsTyping(): boolean {
	const networkTextChatIsTyping_result = Citizen.invokeNative<boolean>('0xA43CD45F18522E3F', );
	return networkTextChatIsTyping_result;
}