/**
 * VEHICLE:_GET_VEHICLE_MODEL_NUM_DRIVE_GEARS
 *
 * 0x61F02E4E9A7A61EA

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleModelNumDriveGears(): number {
	const getVehicleModelNumDriveGears_result = Citizen.invokeNative<number>('0x61F02E4E9A7A61EA', );
	return getVehicleModelNumDriveGears_result;
}