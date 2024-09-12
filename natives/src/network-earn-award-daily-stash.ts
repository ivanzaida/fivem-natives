/**
 * MONEY:_NETWORK_EARN_AWARD_DAILY_STASH
 *
 * 0x0A4457A33AC118B4

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 */
export function networkEarnAwardDailyStash(p0: unknown, p1: unknown): void {
	const networkEarnAwardDailyStash_result = Citizen.invokeNative<void>('0x0A4457A33AC118B4', p0, p1);
	return networkEarnAwardDailyStash_result;
}