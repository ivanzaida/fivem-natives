/**
 * MONEY:NETWORK_EARN_FROM_PREMIUM_JOB
 *
 * 0xCFDC32D2EF467A52

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 */
export function networkEarnFromPremiumJob(amount: number, matchId: string): void {
	const networkEarnFromPremiumJob_result = Citizen.invokeNative<void>('0xCFDC32D2EF467A52', amount, matchId);
	return networkEarnFromPremiumJob_result;
}