/**
 * MONEY:NETWORK_SPEND_GUNRUNNING
 *
 * 0x92473EA3E0FD6C3C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} vehicleModel
 */
export function networkSpendGunrunning(amount: number, fromBank: boolean, fromBankAndWallet: boolean, vehicleModel: number): void {
	const networkSpendGunrunning_result = Citizen.invokeNative<void>('0x92473EA3E0FD6C3C', amount, fromBank, fromBankAndWallet, vehicleModel);
	return networkSpendGunrunning_result;
}