/**
 * MONEY:NETWORK_SPENT_PA_SERVICE_VEHICLE
 *
 * 0xEC25575B0C446336

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} vehicleHash
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPaServiceVehicle(amount: number, vehicleHash: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPaServiceVehicle_result = Citizen.invokeNative<void>('0xEC25575B0C446336', amount, vehicleHash, fromBank, fromBankAndWallet);
	return networkSpentPaServiceVehicle_result;
}