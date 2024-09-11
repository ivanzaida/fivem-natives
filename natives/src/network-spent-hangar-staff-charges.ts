/**
 * MONEY:NETWORK_SPENT_HANGAR_STAFF_CHARGES
 *
 * 0x7AB1CE55FB991D7E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentHangarStaffCharges(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentHangarStaffCharges_result = Citizen.invokeNative<void>('0x7AB1CE55FB991D7E', amount, fromBank, fromBankAndWallet);
	return networkSpentHangarStaffCharges_result;
}