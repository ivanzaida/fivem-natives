/**
 * MONEY:NETWORK_EARN_FROM_JOB
 *
 * 0x429D9B81D13F3456

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 */
export function networkEarnFromJob(amount: number, matchId: string): void {
	const networkEarnFromJob_result = Citizen.invokeNative<void>('0x429D9B81D13F3456', amount, matchId);
	return networkEarnFromJob_result;
}