import { PedIndex, VehicleIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_DRIVE_TO_COORD_LONGRANGE
 *
 * 0x6C33493626F3C0D1

 * 
 * Only use this if the choice of target is up to the player or otherwise unknown at script-time.
 * Examples: the taxi script going to player blips
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} speed
 * @param {EDrivingmode} mode
 * @param {number} targetRadius
 */
export function taskVehicleDriveToCoordLongrange(ped: PedIndex, vehicle: VehicleIndex, coorsX: number, coorsY: number, coorsZ: number, speed: number, mode: EDrivingmode | number, targetRadius: number): void {
	const taskVehicleDriveToCoordLongrange_result = Citizen.invokeNative<void>('0x6C33493626F3C0D1', ped, vehicle, coorsX, coorsY, coorsZ, speed, mode, targetRadius);
	return taskVehicleDriveToCoordLongrange_result;
}