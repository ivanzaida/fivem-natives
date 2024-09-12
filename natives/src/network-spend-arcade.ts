/**
 * MONEY:NETWORK_SPEND_ARCADE
 *
 * 0x4BB8B039E0467D33

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} bar
 * @param {number} barAmount
 */
export function networkSpendArcade(amount: number, fromBank: boolean, fromBankAndWallet: boolean, bar: number, barAmount: number): void {
	const networkSpendArcade_result = Citizen.invokeNative<void>('0x4BB8B039E0467D33', amount, fromBank, fromBankAndWallet, bar, barAmount);
	return networkSpendArcade_result;
}