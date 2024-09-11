/**
 * MONEY:NETWORK_SPENT_ORDER_BODYGUARD_VEHICLE
 *
 * 0x4EF4490FC3B90AD2

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} vehicleHash
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentOrderBodyguardVehicle(amount: number, vehicleHash: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentOrderBodyguardVehicle_result = Citizen.invokeNative<void>('0x4EF4490FC3B90AD2', amount, vehicleHash, fromBank, fromBankAndWallet);
	return networkSpentOrderBodyguardVehicle_result;
}