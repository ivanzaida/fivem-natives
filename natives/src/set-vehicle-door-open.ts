import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOOR_OPEN
 *
 * 0xBFE60A5CC0C835D8

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} swingFree
 * @param {boolean} instant
 */
export function setVehicleDoorOpen(vehicle: VehicleIndex, doorNumber: EScDoorList | number, swingFree: boolean = false, instant: boolean = false): void {
	const setVehicleDoorOpen_result = Citizen.invokeNative<void>('0xBFE60A5CC0C835D8', vehicle, doorNumber, swingFree, instant);
	return setVehicleDoorOpen_result;
}