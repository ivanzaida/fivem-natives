/**
 * MONEY:NETWORK_SPENT_RENAME_ORGANIZATION
 *
 * 0x1DC31E2CC59D9BB2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentRenameOrganization(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentRenameOrganization_result = Citizen.invokeNative<void>('0x1DC31E2CC59D9BB2', amount, fromBank, fromBankAndWallet);
	return networkSpentRenameOrganization_result;
}