/**
 * MONEY:NETWORK_EARN_FROM_BEND_JOB
 *
 * 0x31F0EC70888E1490

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 */
export function networkEarnFromBendJob(amount: number, matchId: string): void {
	const networkEarnFromBendJob_result = Citizen.invokeNative<void>('0x31F0EC70888E1490', amount, matchId);
	return networkEarnFromBendJob_result;
}