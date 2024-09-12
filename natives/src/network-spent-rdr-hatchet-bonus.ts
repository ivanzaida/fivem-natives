/**
 * MONEY:NETWORK_SPENT_RDR_HATCHET_BONUS
 *
 * 0x4D7CE2298CFF7D42

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentRdrHatchetBonus(amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentRdrHatchetBonus_result = Citizen.invokeNative<void>('0x4D7CE2298CFF7D42', amount, fromBank, fromBankAndWallet);
	return networkSpentRdrHatchetBonus_result;
}