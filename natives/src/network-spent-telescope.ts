/**
 * MONEY:NETWORK_SPENT_TELESCOPE
 *
 * 0xE7F56AD8A71AC4E6

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentTelescope(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentTelescope_result = Citizen.invokeNative<void>('0xE7F56AD8A71AC4E6', amount, fromBank, fromBankAndWallet);
	return networkSpentTelescope_result;
}