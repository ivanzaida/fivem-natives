/**
 * MONEY:NETWORK_SPENT_FROM_ROCKSTAR
 *
 * 0xE3BE7893C3C3EC1D

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentFromRockstar(amount: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentFromRockstar_result = Citizen.invokeNative<void>('0xE3BE7893C3C3EC1D', amount, fromBank, fromBankAndWallet);
	return networkSpentFromRockstar_result;
}