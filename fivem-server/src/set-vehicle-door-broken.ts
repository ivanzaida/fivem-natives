import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_DOOR_BROKEN
 *
 * 0x8147FEA7

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} doorIndex
 * @param {boolean} deleteDoor
 */
export function setVehicleDoorBroken(vehicle: VehicleIndex, doorIndex: number, deleteDoor: boolean): void {
	const setVehicleDoorBroken_result = Citizen.invokeNative<void>('0x8147FEA7', vehicle, doorIndex, deleteDoor);
	return setVehicleDoorBroken_result;
}