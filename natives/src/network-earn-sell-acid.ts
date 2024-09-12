/**
 * MONEY:_NETWORK_EARN_SELL_ACID
 *
 * 0xEC9101A02CD98A8B

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 */
export function networkEarnSellAcid(p0: unknown, p1: unknown): void {
	const networkEarnSellAcid_result = Citizen.invokeNative<void>('0xEC9101A02CD98A8B', p0, p1);
	return networkEarnSellAcid_result;
}