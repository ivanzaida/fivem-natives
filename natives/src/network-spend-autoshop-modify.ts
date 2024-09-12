/**
 * MONEY:NETWORK_SPEND_AUTOSHOP_MODIFY
 *
 * 0xC514E0BC5A9C1A6A

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} vehicleHash
 * @param {number} autoShopAmount
 */
export function networkSpendAutoshopModify(amount: number, fromBank: boolean, fromBankAndWallet: boolean, vehicleHash: number, autoShopAmount: number): void {
	const networkSpendAutoshopModify_result = Citizen.invokeNative<void>('0xC514E0BC5A9C1A6A', amount, fromBank, fromBankAndWallet, vehicleHash, autoShopAmount);
	return networkSpendAutoshopModify_result;
}