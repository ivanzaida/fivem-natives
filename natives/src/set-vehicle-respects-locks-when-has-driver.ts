import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_RESPECTS_LOCKS_WHEN_HAS_DRIVER
 *
 * 0xB2CA6639924FA111

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} respectLocks
 */
export function setVehicleRespectsLocksWhenHasDriver(vehicle: VehicleIndex, respectLocks: boolean): void {
	const setVehicleRespectsLocksWhenHasDriver_result = Citizen.invokeNative<void>('0xB2CA6639924FA111', vehicle, respectLocks);
	return setVehicleRespectsLocksWhenHasDriver_result;
}