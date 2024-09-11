/**
 * MONEY:NETWORK_SPENT_ORDER_WAREHOUSE_VEHICLE
 *
 * 0xAC68FC3E6CBCE6FC

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} vehicleHash
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentOrderWarehouseVehicle(amount: number, vehicleHash: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentOrderWarehouseVehicle_result = Citizen.invokeNative<void>('0xAC68FC3E6CBCE6FC', amount, vehicleHash, fromBank, fromBankAndWallet);
	return networkSpentOrderWarehouseVehicle_result;
}