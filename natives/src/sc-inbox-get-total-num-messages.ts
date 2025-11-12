/**
 * SOCIALCLUB:SC_INBOX_GET_TOTAL_NUM_MESSAGES
 *
 * 0x2CA28CCB7CECACE7

 * 
 * This number may change (bigger or smaller) as we refresh our local inbox
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function scInboxGetTotalNumMessages(): number {
	const scInboxGetTotalNumMessages_result = Citizen.invokeNative<number>('0x2CA28CCB7CECACE7', );
	return scInboxGetTotalNumMessages_result;
}