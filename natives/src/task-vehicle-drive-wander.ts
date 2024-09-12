import { PedIndex, VehicleIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_DRIVE_WANDER
 *
 * 0x7C8E9DE09D4AD3FF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 */
export function taskVehicleDriveWander(ped: PedIndex, vehicle: VehicleIndex, cruiseSpeed: number, mode: EDrivingmode | number): void {
	const taskVehicleDriveWander_result = Citizen.invokeNative<void>('0x7C8E9DE09D4AD3FF', ped, vehicle, cruiseSpeed, mode);
	return taskVehicleDriveWander_result;
}