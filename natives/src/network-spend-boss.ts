/**
 * MONEY:NETWORK_SPEND_BOSS
 *
 * 0x773A6B5BEC33A424

 * 
 * Pay money to the Boss
 * DEPRECATED !
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} bossId1
 * @param {number} bossId2
 * @param {number} amount
 */
export function networkSpendBoss(bossId1: number, bossId2: number, amount: number): void {
	const networkSpendBoss_result = Citizen.invokeNative<void>('0x773A6B5BEC33A424', bossId1, bossId2, amount);
	return networkSpendBoss_result;
}