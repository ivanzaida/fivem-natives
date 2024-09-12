/**
 * SOCIALCLUB:SC_INBOX_MESSAGE_GET_RAW_TYPE_AT_INDEX
 *
 * 0x45A989529B3F2C25

 * 
 * ------------------------------------------------------------------
 * @param {number} msg
 * @returns {string}  
 */
export function scInboxMessageGetRawTypeAtIndex(msg: number): string {
	const scInboxMessageGetRawTypeAtIndex_result = Citizen.invokeNative<string>('0x45A989529B3F2C25', msg);
	return scInboxMessageGetRawTypeAtIndex_result;
}