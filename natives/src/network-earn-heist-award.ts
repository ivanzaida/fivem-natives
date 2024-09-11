/**
 * MONEY:NETWORK_EARN_HEIST_AWARD
 *
 * 0x2AF3C8E8D2120D10

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 * @param {string} challenge
 */
export function networkEarnHeistAward(amount: number, matchId: string, challenge: string): void {
	const networkEarnHeistAward_result = Citizen.invokeNative<void>('0x2AF3C8E8D2120D10', amount, matchId, challenge);
	return networkEarnHeistAward_result;
}