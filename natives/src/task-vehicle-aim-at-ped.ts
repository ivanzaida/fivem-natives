import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_AIM_AT_PED
 *
 * 0xE021F54CBB4F4FD1

 * 
 * The ped will aim from a vehicle the other ped passed.
 * Using:
 * Driveby weapons
 * Vehicle mounted weapons
 * Depending on what is currently selected in their inventory.
 * SEE ALSO TASK_VEHICLE_AIM_AT_COORD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 */
export function taskVehicleAimAtPed(ped: PedIndex, otherPed: PedIndex): void {
	const taskVehicleAimAtPed_result = Citizen.invokeNative<void>('0xE021F54CBB4F4FD1', ped, otherPed);
	return taskVehicleAimAtPed_result;
}