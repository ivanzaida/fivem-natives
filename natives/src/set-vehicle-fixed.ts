import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FIXED
 *
 * 0xF698038C13845696

 * 
 * Restores the health of the vehicle and fixes any damage
 * 
 * This fixes a vehicle.
 * If the vehicle's engine's broken then you cannot fix it with this native.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehicleFixed(vehicle: VehicleIndex): void {
	const setVehicleFixed_result = Citizen.invokeNative<void>('0xF698038C13845696', vehicle);
	return setVehicleFixed_result;
}