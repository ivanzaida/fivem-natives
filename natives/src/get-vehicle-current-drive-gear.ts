/**
 * VEHICLE:_GET_VEHICLE_CURRENT_DRIVE_GEAR
 *
 * 0x56185A25D45A0DCD

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleCurrentDriveGear(): number {
	const getVehicleCurrentDriveGear_result = Citizen.invokeNative<number>('0x56185A25D45A0DCD', );
	return getVehicleCurrentDriveGear_result;
}