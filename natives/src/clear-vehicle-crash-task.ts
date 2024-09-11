import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_VEHICLE_CRASH_TASK
 *
 * 0xE61DA9B9D8DB2035

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function clearVehicleCrashTask(vehicle: VehicleIndex): void {
	const clearVehicleCrashTask_result = Citizen.invokeNative<void>('0xE61DA9B9D8DB2035', vehicle);
	return clearVehicleCrashTask_result;
}