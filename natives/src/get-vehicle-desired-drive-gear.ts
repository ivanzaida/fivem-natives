/**
 * VEHICLE:_GET_VEHICLE_DESIRED_DRIVE_GEAR
 *
 * 0xFD8CE53356B5D745

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getVehicleDesiredDriveGear(): number {
	const getVehicleDesiredDriveGear_result = Citizen.invokeNative<number>('0xFD8CE53356B5D745', );
	return getVehicleDesiredDriveGear_result;
}