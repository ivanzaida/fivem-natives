import { VehicleIndex, EScDoorList } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOOR_LATCHED
 *
 * 0xC1FE4FCB32785633

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EScDoorList} doorNumber
 * @param {boolean} setLatched
 * @param {boolean} willAutoLatch
 * @param {boolean} applyForceForDoorClosed
 */
export function setVehicleDoorLatched(vehicle: VehicleIndex, doorNumber: EScDoorList | number, setLatched: boolean, willAutoLatch: boolean, applyForceForDoorClosed: boolean = true): void {
	const setVehicleDoorLatched_result = Citizen.invokeNative<void>('0xC1FE4FCB32785633', vehicle, doorNumber, setLatched, willAutoLatch, applyForceForDoorClosed);
	return setVehicleDoorLatched_result;
}