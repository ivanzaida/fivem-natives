import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOOR_BROKEN
 *
 * 0x89E9F387C190061F

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} dissapear
 */
export function setVehicleDoorBroken(vehicle: VehicleIndex, doorNumber: EScDoorList | number, dissapear: boolean): void {
	const setVehicleDoorBroken_result = Citizen.invokeNative<void>('0x89E9F387C190061F', vehicle, doorNumber, dissapear);
	return setVehicleDoorBroken_result;
}