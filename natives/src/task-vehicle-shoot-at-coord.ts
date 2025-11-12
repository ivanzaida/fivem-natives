import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_SHOOT_AT_COORD
 *
 * 0x777E107FA017C2BE

 * 
 * The ped will shoot from a vehicle at the coord passed.
 * Using:
 * Driveby weapons
 * Vehicle mounted weapons
 * Grenades
 * Depending on what is currently selected in their inventory.
 * SEE ALSO TASK_VEHICLE_SHOOT_AT_PED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} fireTolerance
 */
export function taskVehicleShootAtCoord(ped: PedIndex, positionX: number, positionY: number, positionZ: number, fireTolerance: number = 20): void {
	const taskVehicleShootAtCoord_result = Citizen.invokeNative<void>('0x777E107FA017C2BE', ped, positionX, positionY, positionZ, fireTolerance);
	return taskVehicleShootAtCoord_result;
}