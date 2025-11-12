import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_AIM_AT_COORD
 *
 * 0xE61AF8D27706A774

 * 
 * The ped will aim from a vehicle at the coord passed.
 * Using:
 * Driveby weapons
 * Vehicle mounted weapons
 * Depending on what is currently selected in their inventory.
 * SEE ALSO TASK_VEHICLE_AIM_AT_PED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 */
export function taskVehicleAimAtCoord(ped: PedIndex, positionX: number, positionY: number, positionZ: number): void {
	const taskVehicleAimAtCoord_result = Citizen.invokeNative<void>('0xE61AF8D27706A774', ped, positionX, positionY, positionZ);
	return taskVehicleAimAtCoord_result;
}