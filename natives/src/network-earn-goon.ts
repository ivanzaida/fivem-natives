/**
 * MONEY:NETWORK_EARN_GOON
 *
 * 0x22A4F417AF7EDBB3

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 */
export function networkEarnGoon(bossId1: number, bossId2: number, amount: number): void {
	const networkEarnGoon_result = Citizen.invokeNative<void>('0x22A4F417AF7EDBB3', bossId1, bossId2, amount);
	return networkEarnGoon_result;
}