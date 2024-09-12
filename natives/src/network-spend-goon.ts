/**
 * MONEY:NETWORK_SPEND_GOON
 *
 * 0x7E8D3E1CB76D4269

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 */
export function networkSpendGoon(bossId1: number, bossId2: number, amount: number): void {
	const networkSpendGoon_result = Citizen.invokeNative<void>('0x7E8D3E1CB76D4269', bossId1, bossId2, amount);
	return networkSpendGoon_result;
}