/**
 * VEHICLE:DETONATE_VEHICLE_PHONE_EXPLOSIVE_DEVICE
 *
 * 0x235C228FDD040462

 * 
 * ------------------------------------------------------------------
 */
export function detonateVehiclePhoneExplosiveDevice(): void {
	const detonateVehiclePhoneExplosiveDevice_result = Citizen.invokeNative<void>('0x235C228FDD040462', );
	return detonateVehiclePhoneExplosiveDevice_result;
}