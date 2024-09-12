/**
 * MONEY:NETWORK_EARN_TUNER_AWARD
 *
 * 0x16FD73B3F4345670

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} matchId
 * @param {string} challenge
 */
export function networkEarnTunerAward(amount: number, matchId: string, challenge: string): void {
	const networkEarnTunerAward_result = Citizen.invokeNative<void>('0x16FD73B3F4345670', amount, matchId, challenge);
	return networkEarnTunerAward_result;
}