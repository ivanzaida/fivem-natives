/**
 * MONEY:NETWORK_SERVICE_EARN_GANGOPS_RIVAL_DELIVERY
 *
 * 0xC1248D942D71375C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkServiceEarnGangopsRivalDelivery(amount: number): void {
	const networkServiceEarnGangopsRivalDelivery_result = Citizen.invokeNative<void>('0xC1248D942D71375C', amount);
	return networkServiceEarnGangopsRivalDelivery_result;
}