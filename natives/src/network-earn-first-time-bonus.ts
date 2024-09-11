/**
 * MONEY:NETWORK_EARN_FIRST_TIME_BONUS
 *
 * 0x4247915DE1F30269

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 * @param {string} challenge
 */
export function networkEarnFirstTimeBonus(amount: number, matchId: string, challenge: string): void {
	const networkEarnFirstTimeBonus_result = Citizen.invokeNative<void>('0x4247915DE1F30269', amount, matchId, challenge);
	return networkEarnFirstTimeBonus_result;
}