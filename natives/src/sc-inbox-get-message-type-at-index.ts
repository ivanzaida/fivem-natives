import { EInboxMsgType } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_GET_MESSAGE_TYPE_AT_INDEX
 *
 * 0x544DCD3126D76335

 * 
 * ------------------------------------------------------------------
 * @param {number} msg
 * @returns {EInboxMsgType}  
 */
export function scInboxGetMessageTypeAtIndex(msg: number): EInboxMsgType {
	const scInboxGetMessageTypeAtIndex_result = Citizen.invokeNative<EInboxMsgType>('0x544DCD3126D76335', msg);
	return scInboxGetMessageTypeAtIndex_result;
}