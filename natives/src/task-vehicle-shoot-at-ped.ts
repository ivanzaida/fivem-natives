import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_SHOOT_AT_PED
 *
 * 0x0ADB09C3437C4CCD

 * 
 * The ped will shoot from a vehicle the other ped passed.
 * Using:
 * Driveby weapons
 * Vehicle mounted weapons
 * Grenades
 * Depending on what is currently selected in their inventory.
 * SEE ALSO TASK_VEHICLE_SHOOT_AT_COORD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {number} fireTolerance
 */
export function taskVehicleShootAtPed(ped: PedIndex, otherPed: PedIndex, fireTolerance: number = 20): void {
	const taskVehicleShootAtPed_result = Citizen.invokeNative<void>('0x0ADB09C3437C4CCD', ped, otherPed, fireTolerance);
	return taskVehicleShootAtPed_result;
}