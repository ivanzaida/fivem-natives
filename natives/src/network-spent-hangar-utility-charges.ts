/**
 * MONEY:NETWORK_SPENT_HANGAR_UTILITY_CHARGES
 *
 * 0xE9BEC9AEEBD10172

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentHangarUtilityCharges(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentHangarUtilityCharges_result = Citizen.invokeNative<void>('0xE9BEC9AEEBD10172', amount, fromBank, fromBankAndWallet);
	return networkSpentHangarUtilityCharges_result;
}