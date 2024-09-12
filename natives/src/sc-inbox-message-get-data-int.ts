import { IntRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_MESSAGE_GET_DATA_INT
 *
 * 0x58103281724A16DE

 * 
 * ------------------------------------------------------------------
 * @param {number} msg
 * @param {string} name
 * @param {IntRef} value [Ref]
 * @returns {boolean}  
 */
export function scInboxMessageGetDataInt(msg: number, name: string, value: IntRef /* ptr */): boolean {
	const scInboxMessageGetDataInt_result = Citizen.invokeNative<boolean>('0x58103281724A16DE', msg, name, value.dataView);
	return scInboxMessageGetDataInt_result;
}