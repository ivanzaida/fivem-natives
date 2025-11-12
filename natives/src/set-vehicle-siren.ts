import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_SIREN
 *
 * 0x4539850624F18A9E

 * 
 * Activate siren on vehicle (Only works if the vehicle has a siren).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} sirenFlag
 */
export function setVehicleSiren(vehicle: VehicleIndex, sirenFlag: boolean): void {
	const setVehicleSiren_result = Citizen.invokeNative<void>('0x4539850624F18A9E', vehicle, sirenFlag);
	return setVehicleSiren_result;
}