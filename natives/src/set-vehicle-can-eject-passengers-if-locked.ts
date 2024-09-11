import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_EJECT_PASSENGERS_IF_LOCKED
 *
 * 0xEFEFBD4EA86918AE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} respectLocks
 */
export function setVehicleCanEjectPassengersIfLocked(vehicle: VehicleIndex, respectLocks: boolean): void {
	const setVehicleCanEjectPassengersIfLocked_result = Citizen.invokeNative<void>('0xEFEFBD4EA86918AE', vehicle, respectLocks);
	return setVehicleCanEjectPassengersIfLocked_result;
}