import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CAN_TEXT_CHAT_WITH_GAMER
 *
 * 0x6404C6D45C897433

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkCanTextChatWithGamer(gamer: GamerHandle /* ptr */): boolean {
	const networkCanTextChatWithGamer_result = Citizen.invokeNative<boolean>('0x6404C6D45C897433', gamer.dataView);
	return networkCanTextChatWithGamer_result;
}