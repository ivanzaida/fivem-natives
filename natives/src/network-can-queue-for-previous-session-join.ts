/**
 * NETWORK:NETWORK_CAN_QUEUE_FOR_PREVIOUS_SESSION_JOIN
 *
 * 0xC9C468532694A690

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkCanQueueForPreviousSessionJoin(): boolean {
	const networkCanQueueForPreviousSessionJoin_result = Citizen.invokeNative<boolean>('0xC9C468532694A690', );
	return networkCanQueueForPreviousSessionJoin_result;
}