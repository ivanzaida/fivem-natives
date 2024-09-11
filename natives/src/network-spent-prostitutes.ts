/**
 * MONEY:NETWORK_SPENT_PROSTITUTES
 *
 * 0x8D54F66F66BE0AA4

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentProstitutes(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentProstitutes_result = Citizen.invokeNative<void>('0x8D54F66F66BE0AA4', amount, fromBank, fromBankAndWallet);
	return networkSpentProstitutes_result;
}