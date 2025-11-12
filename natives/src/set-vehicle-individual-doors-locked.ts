import { VehicleIndex, ELockState } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_INDIVIDUAL_DOORS_LOCKED
 *
 * 0x1F4C790D1AC5AFF9

 * 
 * doorId: see SET_VEHICLE_DOOR_SHUT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} door
 * @param {ELockState} newLockState
 */
export function setVehicleIndividualDoorsLocked(vehicle: VehicleIndex, door: number, newLockState: ELockState | number): void {
	const setVehicleIndividualDoorsLocked_result = Citizen.invokeNative<void>('0x1F4C790D1AC5AFF9', vehicle, door, newLockState);
	return setVehicleIndividualDoorsLocked_result;
}