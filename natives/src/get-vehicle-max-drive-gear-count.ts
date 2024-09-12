/**
 * VEHICLE:_GET_VEHICLE_MAX_DRIVE_GEAR_COUNT
 *
 * 0x24910C3D66BA770D

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleMaxDriveGearCount(): number {
	const getVehicleMaxDriveGearCount_result = Citizen.invokeNative<number>('0x24910C3D66BA770D', );
	return getVehicleMaxDriveGearCount_result;
}