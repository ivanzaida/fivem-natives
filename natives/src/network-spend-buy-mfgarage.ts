/**
 * MONEY:_NETWORK_SPEND_BUY_MFGARAGE
 *
 * 0x8B7BEFF3C8EF4B47

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 * @param {unknown} p2
 * @param {unknown} p3
 */
export function networkSpendBuyMfgarage(p0: unknown, p1: unknown, p2: unknown, p3: unknown): void {
	const networkSpendBuyMfgarage_result = Citizen.invokeNative<void>('0x8B7BEFF3C8EF4B47', p0, p1, p2, p3);
	return networkSpendBuyMfgarage_result;
}