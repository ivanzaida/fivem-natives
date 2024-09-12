import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_DOOR_BROKEN
 *
 * 0x8147FEA7

 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} dissapear
 */
export function setVehicleDoorBroken(vehicle: VehicleIndex, doorNumber: EScDoorList | number, dissapear: boolean): void {
	const setVehicleDoorBroken_result = Citizen.invokeNative<void>('0x8147FEA7', vehicle, doorNumber, dissapear);
	return setVehicleDoorBroken_result;
}