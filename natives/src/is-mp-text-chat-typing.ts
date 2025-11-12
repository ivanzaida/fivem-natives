/**
 * HUD:IS_MP_TEXT_CHAT_TYPING
 *
 * 0xF8EFC60132F8109F

 * 
 * Returns whether or not the text chat (MULTIPLAYER_CHAT Scaleform component) is active.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMpTextChatTyping(): boolean {
	const isMpTextChatTyping_result = Citizen.invokeNative<boolean>('0xF8EFC60132F8109F', );
	return isMpTextChatTyping_result;
}