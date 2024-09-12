/**
 * MONEY:NETWORK_EARN_CHALLENGE
 *
 * 0xA5C6A0D18EC0D946

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} kills
 * @param {number} killsAmount
 */
export function networkEarnChallenge(amount: number, kills: number, killsAmount: number): void {
	const networkEarnChallenge_result = Citizen.invokeNative<void>('0xA5C6A0D18EC0D946', amount, kills, killsAmount);
	return networkEarnChallenge_result;
}