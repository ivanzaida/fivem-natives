/**
 * NETWORK:NETWORK_GET_GAMER_STATUS_FROM_QUEUE
 *
 * 0x23F4D421F65F56BD

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGetGamerStatusFromQueue(): boolean {
	const networkGetGamerStatusFromQueue_result = Citizen.invokeNative<boolean>('0x23F4D421F65F56BD', );
	return networkGetGamerStatusFromQueue_result;
}