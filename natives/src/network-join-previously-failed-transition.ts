/**
 * NETWORK:NETWORK_JOIN_PREVIOUSLY_FAILED_TRANSITION
 *
 * 0x7C2F429F5A70EFE8

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkJoinPreviouslyFailedTransition(): boolean {
	const networkJoinPreviouslyFailedTransition_result = Citizen.invokeNative<boolean>('0x7C2F429F5A70EFE8', );
	return networkJoinPreviouslyFailedTransition_result;
}