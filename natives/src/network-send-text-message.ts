import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SEND_TEXT_MESSAGE
 *
 * 0x44FC944CCE2884A5

 * 
 * Message is limited to 64 characters.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} szTextMessage
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkSendTextMessage(szTextMessage: string, gamer: GamerHandle /* ptr */): boolean {
	const networkSendTextMessage_result = Citizen.invokeNative<boolean>('0x44FC944CCE2884A5', szTextMessage, gamer.dataView);
	return networkSendTextMessage_result;
}