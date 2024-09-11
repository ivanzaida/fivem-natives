/**
 * MONEY:NETWORK_SPENT_REHIRE_DJ
 *
 * 0xC72D28E5EF1107CF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} dj
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentRehireDj(amount: number, dj: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpentRehireDj_result = Citizen.invokeNative<void>('0xC72D28E5EF1107CF', amount, dj, fromBank, fromBankAndWallet);
	return networkSpentRehireDj_result;
}