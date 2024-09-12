/**
 * HUD:ADD_VALID_VEHICLE_HIT_HASH
 *
 * 0x045DEDB275874D85

 * 
 * ------------------------------------------------------------------
 * @param {number} vehicleHash
 */
export function addValidVehicleHitHash(vehicleHash: number): void {
	const addValidVehicleHitHash_result = Citizen.invokeNative<void>('0x045DEDB275874D85', vehicleHash);
	return addValidVehicleHitHash_result;
}