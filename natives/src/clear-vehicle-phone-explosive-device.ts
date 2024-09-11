/**
 * VEHICLE:CLEAR_VEHICLE_PHONE_EXPLOSIVE_DEVICE
 *
 * 0x9E4B8D8CF051F6DC

 * 
 * ------------------------------------------------------------------
 */
export function clearVehiclePhoneExplosiveDevice(): void {
	const clearVehiclePhoneExplosiveDevice_result = Citizen.invokeNative<void>('0x9E4B8D8CF051F6DC', );
	return clearVehiclePhoneExplosiveDevice_result;
}