/**
 * VEHICLE:HAS_VEHICLE_PHONE_EXPLOSIVE_DEVICE
 *
 * 0xA648CE821FEF3C51

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function hasVehiclePhoneExplosiveDevice(): boolean {
	const hasVehiclePhoneExplosiveDevice_result = Citizen.invokeNative<boolean>('0xA648CE821FEF3C51', );
	return hasVehiclePhoneExplosiveDevice_result;
}