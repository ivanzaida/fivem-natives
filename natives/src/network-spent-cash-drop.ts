/**
 * MONEY:NETWORK_SPENT_CASH_DROP
 *
 * 0x93D264A3F6B3EC83

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentCashDrop(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentCashDrop_result = Citizen.invokeNative<void>('0x93D264A3F6B3EC83', amount, fromBank, fromBankAndWallet);
	return networkSpentCashDrop_result;
}