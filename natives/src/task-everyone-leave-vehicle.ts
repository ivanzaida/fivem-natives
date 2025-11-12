import { VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_EVERYONE_LEAVE_VEHICLE
 *
 * 0xD5094C4B174E9016

 * 
 * Task doesn’t work as part of a sequence.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function taskEveryoneLeaveVehicle(vehicle: VehicleIndex): void {
	const taskEveryoneLeaveVehicle_result = Citizen.invokeNative<void>('0xD5094C4B174E9016', vehicle);
	return taskEveryoneLeaveVehicle_result;
}