/**
 * MONEY:_NETWORK_SPEND_UPGRADE_MFGARAGE
 *
 * 0xB01E58326A51EBA2

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 * @param {unknown} p2
 * @param {unknown} p3
 */
export function networkSpendUpgradeMfgarage(p0: unknown, p1: unknown, p2: unknown, p3: unknown): void {
	const networkSpendUpgradeMfgarage_result = Citizen.invokeNative<void>('0xB01E58326A51EBA2', p0, p1, p2, p3);
	return networkSpendUpgradeMfgarage_result;
}