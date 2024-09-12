import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DOOR_STATUS
 *
 * 0X6E35C49C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  A number from 0 to 7.
 */
export function getVehicleDoorStatus(vehicle: VehicleIndex): number {
	const getVehicleDoorStatus_result = Citizen.invokeNative<number>('0X6E35C49C', vehicle);
	return getVehicleDoorStatus_result;
}