/**
 * MONEY:NETWORK_SPENT_PA_SERVICE_IMPOUND
 *
 * 0x6C12EC99A95B5DAB

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPaServiceImpound(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPaServiceImpound_result = Citizen.invokeNative<void>('0x6C12EC99A95B5DAB', amount, fromBank, fromBankAndWallet);
	return networkSpentPaServiceImpound_result;
}