import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FORCE_INTERIORLIGHT
 *
 * 0xA5498338B4203373

 * 
 * Sets some bit of vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceInteriorLight
 */
export function setVehicleForceInteriorlight(vehicle: VehicleIndex, forceInteriorLight: boolean): void {
	const setVehicleForceInteriorlight_result = Citizen.invokeNative<void>('0xA5498338B4203373', vehicle, forceInteriorLight);
	return setVehicleForceInteriorlight_result;
}