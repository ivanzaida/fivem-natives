/**
 * MONEY:NETWORK_EARN_BOSS
 *
 * 0x1C3E529B167B0152

 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 */
export function networkEarnBoss(bossId1: number, bossId2: number, amount: number): void {
	const networkEarnBoss_result = Citizen.invokeNative<void>('0x1C3E529B167B0152', bossId1, bossId2, amount);
	return networkEarnBoss_result;
}