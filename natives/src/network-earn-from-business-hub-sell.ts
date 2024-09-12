/**
 * MONEY:NETWORK_EARN_FROM_BUSINESS_HUB_SELL
 *
 * 0xADDD87AAD0952829

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} nightclubID
 * @param {number} quantitySold
 */
export function networkEarnFromBusinessHubSell(amount: number, nightclubID: number, quantitySold: number): void {
	const networkEarnFromBusinessHubSell_result = Citizen.invokeNative<void>('0xADDD87AAD0952829', amount, nightclubID, quantitySold);
	return networkEarnFromBusinessHubSell_result;
}