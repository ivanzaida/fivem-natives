import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NOT_STEALABLE_AMBIENTLY
 *
 * 0x9BC299A7D57D7CAA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} stealable
 */
export function setVehicleNotStealableAmbiently(vehicle: VehicleIndex, stealable: boolean): void {
	const setVehicleNotStealableAmbiently_result = Citizen.invokeNative<void>('0x9BC299A7D57D7CAA', vehicle, stealable);
	return setVehicleNotStealableAmbiently_result;
}