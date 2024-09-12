/**
 * NETWORK:NETWORK_IS_PUSH_TO_TALK_ACTIVE
 *
 * 0x00C58A2B1D95D090

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsPushToTalkActive(): boolean {
	const networkIsPushToTalkActive_result = Citizen.invokeNative<boolean>('0x00C58A2B1D95D090', );
	return networkIsPushToTalkActive_result;
}