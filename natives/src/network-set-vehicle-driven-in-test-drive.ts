/**
 * NETWORK:NETWORK_SET_VEHICLE_DRIVEN_IN_TEST_DRIVE
 *
 * 0x028A2896E5EB2CBE

 * 
 * Used by MetricVEHICLE_DIST_DRIVEN
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} vehicleDrivenInTestDrive
 */
export function networkSetVehicleDrivenInTestDrive(vehicleDrivenInTestDrive: boolean): void {
	const networkSetVehicleDrivenInTestDrive_result = Citizen.invokeNative<void>('0x028A2896E5EB2CBE', vehicleDrivenInTestDrive);
	return networkSetVehicleDrivenInTestDrive_result;
}