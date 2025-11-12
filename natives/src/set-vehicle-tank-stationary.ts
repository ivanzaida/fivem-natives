import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TANK_STATIONARY
 *
 * 0x9636B030D6DE5C35

 * 
 * Makes the tank stay still when shooting at a target
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} stationary
 */
export function setVehicleTankStationary(vehicle: VehicleIndex, stationary: boolean): void {
	const setVehicleTankStationary_result = Citizen.invokeNative<void>('0x9636B030D6DE5C35', vehicle, stationary);
	return setVehicleTankStationary_result;
}