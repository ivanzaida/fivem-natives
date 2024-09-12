import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HANDBRAKE
 *
 * 0xB2FD24D644A68449

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} on
 */
export function setVehicleHandbrake(vehicle: VehicleIndex, on: boolean): void {
	const setVehicleHandbrake_result = Citizen.invokeNative<void>('0xB2FD24D644A68449', vehicle, on);
	return setVehicleHandbrake_result;
}