/**
 * MONEY:NETWORK_SPEND_NIGHTCLUB_BAR_DRINK
 *
 * 0x8F5EE908F5AE9BC3

 * 
 * ------------------------------------------------------------------
 * @param {number} drinkid
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpendNightclubBarDrink(drinkid: number, amount: number, fromBank: boolean, fromBankAndWallet: boolean): void {
	const networkSpendNightclubBarDrink_result = Citizen.invokeNative<void>('0x8F5EE908F5AE9BC3', drinkid, amount, fromBank, fromBankAndWallet);
	return networkSpendNightclubBarDrink_result;
}