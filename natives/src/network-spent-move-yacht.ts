/**
 * MONEY:NETWORK_SPENT_MOVE_YACHT
 *
 * 0x5ACC4ABDE69D38D4

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentMoveYacht(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentMoveYacht_result = Citizen.invokeNative<void>('0x5ACC4ABDE69D38D4', amount, fromBank, fromBankAndWallet);
	return networkSpentMoveYacht_result;
}