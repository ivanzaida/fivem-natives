/**
 * MONEY:NETWORK_EARN_AGENCY
 *
 * 0xB7FF64F7F3C11C73

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 * @param {boolean} notInAGang
 */
export function networkEarnAgency(bossId1: number, bossId2: number, amount: number, notInAGang: boolean): void {
	const networkEarnAgency_result = Citizen.invokeNative<void>('0xB7FF64F7F3C11C73', bossId1, bossId2, amount, notInAGang);
	return networkEarnAgency_result;
}