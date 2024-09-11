/**
 * MONEY:NETWORK_SPEND_VEHICLE_REQUESTED
 *
 * 0x2ED93149B4CC68C1

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} hashWhoRequested
 * @param {number} vehicleModel
 */
export function networkSpendVehicleRequested(amount: number, fromBank: boolean, fromBankAndWallet: boolean, hashWhoRequested: number, vehicleModel: number): void {
	const networkSpendVehicleRequested_result = Citizen.invokeNative<void>('0x2ED93149B4CC68C1', amount, fromBank, fromBankAndWallet, hashWhoRequested, vehicleModel);
	return networkSpendVehicleRequested_result;
}