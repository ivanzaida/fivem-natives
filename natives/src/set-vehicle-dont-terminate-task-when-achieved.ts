import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DONT_TERMINATE_TASK_WHEN_ACHIEVED
 *
 * 0x827FC1D24FC3CD95

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehicleDontTerminateTaskWhenAchieved(vehicle: VehicleIndex): void {
	const setVehicleDontTerminateTaskWhenAchieved_result = Citizen.invokeNative<void>('0x827FC1D24FC3CD95', vehicle);
	return setVehicleDontTerminateTaskWhenAchieved_result;
}