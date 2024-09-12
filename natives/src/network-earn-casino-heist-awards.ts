/**
 * MONEY:NETWORK_EARN_CASINO_HEIST_AWARDS
 *
 * 0x9ACC96FE8469BF29

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} awards
 * @param {number} awardsAmount
 * @param {number} elite
 * @param {number} eliteAmount
 */
export function networkEarnCasinoHeistAwards(amount: number, awards: number, awardsAmount: number, elite: number, eliteAmount: number): void {
	const networkEarnCasinoHeistAwards_result = Citizen.invokeNative<void>('0x9ACC96FE8469BF29', amount, awards, awardsAmount, elite, eliteAmount);
	return networkEarnCasinoHeistAwards_result;
}