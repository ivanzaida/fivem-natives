/**
 * MONEY:NETWORK_SPENT_CARWASH
 *
 * 0xB18702619A0C0E6E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} modelHash
 * @param {number} location
 * @param {boolean} fromBank
 * @param {boolean} fromWalletandBank
 */
export function networkSpentCarwash(amount: number, modelHash: number, location: number, fromBank: boolean = false, fromWalletandBank: boolean = false): void {
	const networkSpentCarwash_result = Citizen.invokeNative<void>('0xB18702619A0C0E6E', amount, modelHash, location, fromBank, fromWalletandBank);
	return networkSpentCarwash_result;
}