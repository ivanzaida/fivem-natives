/**
 * MONEY:NETWORK_EARN_FROM_VEHICLE_EXPORT
 *
 * 0x8692D3326B328B82

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} bossID1
 * @param {number} bossID2
 */
export function networkEarnFromVehicleExport(amount: number, bossID1: number, bossID2: number): void {
	const networkEarnFromVehicleExport_result = Citizen.invokeNative<void>('0x8692D3326B328B82', amount, bossID1, bossID2);
	return networkEarnFromVehicleExport_result;
}