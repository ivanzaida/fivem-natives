import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DOOR_STATUS
 *
 * 0x6E35C49C

 * Returns the open position of the specified door on the target vehicle.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @param {number} doorIndex Index of door to check (06).
 * @returns {number}  A number from 0 to 7.
 */
export function getVehicleDoorStatus(vehicle: VehicleIndex, doorIndex: number): number {
	const getVehicleDoorStatus_result = Citizen.invokeNative<number>('0x6E35C49C', vehicle, doorIndex);
	return getVehicleDoorStatus_result;
}