/**
 * MONEY:NETWORK_EARN_SELL_BASE
 *
 * 0xFD08D543F04B5AD5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} baseHash
 */
export function networkEarnSellBase(amount: number, baseHash: number): void {
	const networkEarnSellBase_result = Citizen.invokeNative<void>('0xFD08D543F04B5AD5', amount, baseHash);
	return networkEarnSellBase_result;
}