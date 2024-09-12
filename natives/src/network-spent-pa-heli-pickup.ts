/**
 * MONEY:NETWORK_SPENT_PA_HELI_PICKUP
 *
 * 0xD4C7A8B7798F8D76

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} vehicleHash
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 */
export function networkSpentPaHeliPickup(amount: number, vehicleHash: number, fromBank: boolean = false, fromBankAndWallet: boolean = false): void {
	const networkSpentPaHeliPickup_result = Citizen.invokeNative<void>('0xD4C7A8B7798F8D76', amount, vehicleHash, fromBank, fromBankAndWallet);
	return networkSpentPaHeliPickup_result;
}