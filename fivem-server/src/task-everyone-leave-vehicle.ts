import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_EVERYONE_LEAVE_VEHICLE
 *
 * 0xC1971F30

 * 
 * Task doesn’t work as part of a sequence.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function taskEveryoneLeaveVehicle(vehicle: VehicleIndex): void {
	const taskEveryoneLeaveVehicle_result = Citizen.invokeNative<void>('0xC1971F30', vehicle);
	return taskEveryoneLeaveVehicle_result;
}