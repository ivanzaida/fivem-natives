/**
 * MONEY:NETWORK_SPEND_AGENCY
 *
 * 0xE521F8F950FE34C3

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} context
 * @param {number} option
 */
export function networkSpendAgency(amount: number, fromBank: boolean, fromBankAndWallet: boolean, context: number, option: number = 0): void {
	const networkSpendAgency_result = Citizen.invokeNative<void>('0xE521F8F950FE34C3', amount, fromBank, fromBankAndWallet, context, option);
	return networkSpendAgency_result;
}