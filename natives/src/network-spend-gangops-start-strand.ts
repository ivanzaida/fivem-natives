/**
 * MONEY:NETWORK_SPEND_GANGOPS_START_STRAND
 *
 * 0xE01ABEB9E2CF42B9

 * 
 * ------------------------------------------------------------------
 * @param {number} strand
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendGangopsStartStrand(strand: number, amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendGangopsStartStrand_result = Citizen.invokeNative<void>('0xE01ABEB9E2CF42B9', strand, amount, fromBank, fromBankAndWallet);
	return networkSpendGangopsStartStrand_result;
}