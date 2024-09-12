/**
 * MONEY:NETWORK_SPEND_GANGOPS_TRIP_SKIP
 *
 * 0x8091E3CC1E619B39

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendGangopsTripSkip(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendGangopsTripSkip_result = Citizen.invokeNative<void>('0x8091E3CC1E619B39', amount, fromBank, fromBankAndWallet);
	return networkSpendGangopsTripSkip_result;
}