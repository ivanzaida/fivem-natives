/**
 * MONEY:NETWORK_SPEND_ARENA_PREMIUM
 *
 * 0xC57A6CADCEFE5089

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendArenaPremium(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendArenaPremium_result = Citizen.invokeNative<void>('0xC57A6CADCEFE5089', amount, fromBank, fromBankAndWallet);
	return networkSpendArenaPremium_result;
}