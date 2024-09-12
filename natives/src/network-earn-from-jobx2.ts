/**
 * MONEY:NETWORK_EARN_FROM_JOBX2
 *
 * 0x1B850AB8481A78C9

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 */
export function networkEarnFromJobx2(amount: number, matchId: string): void {
	const networkEarnFromJobx2_result = Citizen.invokeNative<void>('0x1B850AB8481A78C9', amount, matchId);
	return networkEarnFromJobx2_result;
}