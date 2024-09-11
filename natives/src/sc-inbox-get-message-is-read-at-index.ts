/**
 * SOCIALCLUB:SC_INBOX_GET_MESSAGE_IS_READ_AT_INDEX
 *
 * 0x0FA6FA5156AD5C8D

 * 
 * ------------------------------------------------------------------
 * @param {number} msg
 * @returns {boolean}  
 */
export function scInboxGetMessageIsReadAtIndex(msg: number): boolean {
	const scInboxGetMessageIsReadAtIndex_result = Citizen.invokeNative<boolean>('0x0FA6FA5156AD5C8D', msg);
	return scInboxGetMessageIsReadAtIndex_result;
}