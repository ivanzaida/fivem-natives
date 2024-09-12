/**
 * MONEY:NETWORK_EARN_FROM_BETTING
 *
 * 0xEEF9D0725B6BE1E9

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 */
export function networkEarnFromBetting(amount: number, matchId: string): void {
	const networkEarnFromBetting_result = Citizen.invokeNative<void>('0xEEF9D0725B6BE1E9', amount, matchId);
	return networkEarnFromBetting_result;
}