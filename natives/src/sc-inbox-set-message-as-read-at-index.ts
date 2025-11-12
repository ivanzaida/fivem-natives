/**
 * SOCIALCLUB:SC_INBOX_SET_MESSAGE_AS_READ_AT_INDEX
 *
 * 0x2FB38A412252BDF6

 * 
 * Marks the inbox message at the given index a LOCALLY read...as a way to locally mark that the
 * message has been processed.  Next time the inbox is locally cleaned, the read messages are purged.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} msg
 * @returns {boolean}  
 */
export function scInboxSetMessageAsReadAtIndex(msg: number): boolean {
	const scInboxSetMessageAsReadAtIndex_result = Citizen.invokeNative<boolean>('0x2FB38A412252BDF6', msg);
	return scInboxSetMessageAsReadAtIndex_result;
}