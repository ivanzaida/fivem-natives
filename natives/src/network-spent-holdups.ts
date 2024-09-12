/**
 * MONEY:NETWORK_SPENT_HOLDUPS
 *
 * 0x770EB7A756AEBF26

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentHoldups(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentHoldups_result = Citizen.invokeNative<void>('0x770EB7A756AEBF26', amount, fromBank, fromBankAndWallet);
	return networkSpentHoldups_result;
}