import { StringRef } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_INBOX_MESSAGE_GET_DATA_STRING
 *
 * 0xC7B4A5CCCF31FA28

 * 
 * ------------------------------------------------------------------
 * @param {number} msg
 * @param {string} name
 * @param {StringRef} value [Ref]
 * @returns {boolean}  
 */
export function scInboxMessageGetDataString(msg: number, name: string, value: StringRef /* ptr */): boolean {
	const scInboxMessageGetDataString_result = Citizen.invokeNative<boolean>('0xC7B4A5CCCF31FA28', msg, name, value.dataView);
	return scInboxMessageGetDataString_result;
}