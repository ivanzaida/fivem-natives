/**
 * MONEY:NETWORK_SPENT_IMPORT_EXPORT_REPAIR
 *
 * 0x4748E1ADA6271630

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentImportExportRepair(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentImportExportRepair_result = Citizen.invokeNative<void>('0x4748E1ADA6271630', amount, fromBank, fromBankAndWallet);
	return networkSpentImportExportRepair_result;
}