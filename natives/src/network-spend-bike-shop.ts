/**
 * MONEY:NETWORK_SPEND_BIKE_SHOP
 *
 * 0x682B3A2CFD8CC244

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} vehicleModel
 */
export function networkSpendBikeShop(amount: number, fromBank: boolean, fromBankAndWallet: boolean, vehicleModel: number): void {
	const networkSpendBikeShop_result = Citizen.invokeNative<void>('0x682B3A2CFD8CC244', amount, fromBank, fromBankAndWallet, vehicleModel);
	return networkSpendBikeShop_result;
}