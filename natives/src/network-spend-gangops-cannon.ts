/**
 * MONEY:NETWORK_SPEND_GANGOPS_CANNON
 *
 * 0x147D45A959CA40D8

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} shootType
 */
export function networkSpendGangopsCannon(amount: number, fromBank: boolean, fromBankAndWallet: boolean, shootType: number): void {
	const networkSpendGangopsCannon_result = Citizen.invokeNative<void>('0x147D45A959CA40D8', amount, fromBank, fromBankAndWallet, shootType);
	return networkSpendGangopsCannon_result;
}