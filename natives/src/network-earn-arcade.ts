/**
 * MONEY:NETWORK_EARN_ARCADE
 *
 * 0x397B2F6C8F2E3FB2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} arcadeAward
 * @param {number} arcadeAwardAmount
 * @param {number} arcadeTrophy
 * @param {number} arcadeTrophyAmount
 */
export function networkEarnArcade(amount: number, arcadeAward: number, arcadeAwardAmount: number, arcadeTrophy: number, arcadeTrophyAmount: number): void {
	const networkEarnArcade_result = Citizen.invokeNative<void>('0x397B2F6C8F2E3FB2', amount, arcadeAward, arcadeAwardAmount, arcadeTrophy, arcadeTrophyAmount);
	return networkEarnArcade_result;
}