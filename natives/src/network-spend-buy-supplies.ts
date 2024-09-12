/**
 * MONEY:_NETWORK_SPEND_BUY_SUPPLIES
 *
 * 0x8D6321E6F1CBC69C

 * 
 * ------------------------------------------------------------------
 * @param {number} p0
 * @param {boolean} p1
 * @param {boolean} p2
 * @param {number} p3
 */
export function networkSpendBuySupplies(p0: number, p1: boolean, p2: boolean, p3: number): void {
	const networkSpendBuySupplies_result = Citizen.invokeNative<void>('0x8D6321E6F1CBC69C', p0, p1, p2, p3);
	return networkSpendBuySupplies_result;
}