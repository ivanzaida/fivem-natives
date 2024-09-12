/**
 * MONEY:NETWORK_EARN_FROM_CRIMINAL_MASTERMIND
 *
 * 0x30EE7ED666906E6A

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 * @param {string} challenge
 */
export function networkEarnFromCriminalMastermind(amount: number, matchId: string, challenge: string): void {
	const networkEarnFromCriminalMastermind_result = Citizen.invokeNative<void>('0x30EE7ED666906E6A', amount, matchId, challenge);
	return networkEarnFromCriminalMastermind_result;
}