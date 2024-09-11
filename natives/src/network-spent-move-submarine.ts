/**
 * MONEY:NETWORK_SPENT_MOVE_SUBMARINE
 *
 * 0xFCCEE4DF574659D5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentMoveSubmarine(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentMoveSubmarine_result = Citizen.invokeNative<void>('0xFCCEE4DF574659D5', amount, fromBank, fromBankAndWallet);
	return networkSpentMoveSubmarine_result;
}