/**
 * MONEY:NETWORK_SPENT_PA_SERVICE_SNACK
 *
 * 0x4A920AB6D0B69785

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} item
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPaServiceSnack(amount: number, item: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPaServiceSnack_result = Citizen.invokeNative<void>('0x4A920AB6D0B69785', amount, item, fromBank, fromBankAndWallet);
	return networkSpentPaServiceSnack_result;
}