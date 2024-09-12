/**
 * NETWORK:NETWORK_IS_USING_ONLINE_PROMOTION
 *
 * 0x46396D1A40BBF581

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsUsingOnlinePromotion(): boolean {
	const networkIsUsingOnlinePromotion_result = Citizen.invokeNative<boolean>('0x46396D1A40BBF581', );
	return networkIsUsingOnlinePromotion_result;
}