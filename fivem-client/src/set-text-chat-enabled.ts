/**
 * CFX:SET_TEXT_CHAT_ENABLED
 *
 * 0X97B2F9F8

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 * @returns {boolean}  
 */
export function setTextChatEnabled(enabled: boolean): boolean {
	const setTextChatEnabled_result = Citizen.invokeNative<boolean>('0X97B2F9F8', enabled);
	return setTextChatEnabled_result;
}