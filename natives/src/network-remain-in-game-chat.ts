/**
 * NETWORK:NETWORK_REMAIN_IN_GAME_CHAT
 *
 * 0x270D952336FB6142

 * 
 * When players are in a transition session, setting this will flag that they should remain
 * in chat with the players in freeroam. Use when 'on call'
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} remainInGameChat
 */
export function networkRemainInGameChat(remainInGameChat: boolean): void {
	const networkRemainInGameChat_result = Citizen.invokeNative<void>('0x270D952336FB6142', remainInGameChat);
	return networkRemainInGameChat_result;
}