/**
 * MONEY:NETWORK_EARN_COLLECTABLES
 *
 * 0x02E90F469A6AC992

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} arcade
 * @param {number} arcadeAmount
 */
export function networkEarnCollectables(amount: number, arcade: number, arcadeAmount: number): void {
	const networkEarnCollectables_result = Citizen.invokeNative<void>('0x02E90F469A6AC992', amount, arcade, arcadeAmount);
	return networkEarnCollectables_result;
}