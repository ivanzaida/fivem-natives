/**
 * MONEY:NETWORK_EARN_FROM_SELL_BUNKER
 *
 * 0x9B8D5650AE5D3E37

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} bunkerHash
 */
export function networkEarnFromSellBunker(amount: number, bunkerHash: number): void {
	const networkEarnFromSellBunker_result = Citizen.invokeNative<void>('0x9B8D5650AE5D3E37', amount, bunkerHash);
	return networkEarnFromSellBunker_result;
}