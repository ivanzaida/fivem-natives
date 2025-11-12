import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOOR_AUTO_LOCK
 *
 * 0xBC123B7E0667E87D

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * Usually used alongside other vehicle door natives.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} autoLock
 */
export function setVehicleDoorAutoLock(vehicle: VehicleIndex, doorNumber: EScDoorList | number, autoLock: boolean): void {
	const setVehicleDoorAutoLock_result = Citizen.invokeNative<void>('0xBC123B7E0667E87D', vehicle, doorNumber, autoLock);
	return setVehicleDoorAutoLock_result;
}