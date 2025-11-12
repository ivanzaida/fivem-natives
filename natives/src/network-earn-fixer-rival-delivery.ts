/**
 * MONEY:NETWORK_EARN_FIXER_RIVAL_DELIVERY
 *
 * 0xF4E49895EADECEB2

 * 
 * These will be used when a player steals another players asset and delivers
 * it to their own Agency. Rivals will be rewarded $10,000 for each delivery,
 * and will be on a tunable.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} asset
 */
export function networkEarnFixerRivalDelivery(amount: number, asset: number): void {
	const networkEarnFixerRivalDelivery_result = Citizen.invokeNative<void>('0xF4E49895EADECEB2', amount, asset);
	return networkEarnFixerRivalDelivery_result;
}