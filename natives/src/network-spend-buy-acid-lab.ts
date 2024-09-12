/**
 * MONEY:_NETWORK_SPEND_BUY_ACID_LAB
 *
 * 0xFF1266444C9426B4

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 * @param {unknown} p2
 * @param {unknown} p3
 */
export function networkSpendBuyAcidLab(p0: unknown, p1: unknown, p2: unknown, p3: unknown): void {
	const networkSpendBuyAcidLab_result = Citizen.invokeNative<void>('0xFF1266444C9426B4', p0, p1, p2, p3);
	return networkSpendBuyAcidLab_result;
}