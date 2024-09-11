/**
 * MONEY:NETWORK_SPEND_CASINO_GENERIC
 *
 * 0xE4A2A5E5455654BF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {string} category
 * @param {number} item
 */
export function networkSpendCasinoGeneric(amount: number, fromBank: boolean, fromBankAndWallet: boolean, category: string, item: number): void {
	const networkSpendCasinoGeneric_result = Citizen.invokeNative<void>('0xE4A2A5E5455654BF', amount, fromBank, fromBankAndWallet, category, item);
	return networkSpendCasinoGeneric_result;
}