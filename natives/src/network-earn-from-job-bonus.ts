/**
 * MONEY:NETWORK_EARN_FROM_JOB_BONUS
 *
 * 0xFD5431F2DAC6AD75

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 * @param {string} challenge
 */
export function networkEarnFromJobBonus(amount: number, matchId: string, challenge: string): void {
	const networkEarnFromJobBonus_result = Citizen.invokeNative<void>('0xFD5431F2DAC6AD75', amount, matchId, challenge);
	return networkEarnFromJobBonus_result;
}