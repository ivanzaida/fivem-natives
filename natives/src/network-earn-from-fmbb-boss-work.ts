/**
 * MONEY:NETWORK_EARN_FROM_FMBB_BOSS_WORK
 *
 * 0x9C94CA5701190287

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromFmbbBossWork(amount: number): void {
	const networkEarnFromFmbbBossWork_result = Citizen.invokeNative<void>('0x9C94CA5701190287', amount);
	return networkEarnFromFmbbBossWork_result;
}