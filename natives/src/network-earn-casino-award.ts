/**
 * MONEY:NETWORK_EARN_CASINO_AWARD
 *
 * 0x6F19DA0555AFD918

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} award
 */
export function networkEarnCasinoAward(amount: number, award: number): void {
	const networkEarnCasinoAward_result = Citizen.invokeNative<void>('0x6F19DA0555AFD918', amount, award);
	return networkEarnCasinoAward_result;
}