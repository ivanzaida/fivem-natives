/**
 * MONEY:NETWORK_SPEND_SOURCE_BIKE
 *
 * 0xA19C2545709CF8B5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} providerNpc
 */
export function networkSpendSourceBike(amount: number, fromBank: boolean, fromBankAndWallet: boolean, providerNpc: number): void {
	const networkSpendSourceBike_result = Citizen.invokeNative<void>('0xA19C2545709CF8B5', amount, fromBank, fromBankAndWallet, providerNpc);
	return networkSpendSourceBike_result;
}