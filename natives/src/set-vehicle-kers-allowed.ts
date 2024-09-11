import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_KERS_ALLOWED
 *
 * 0xF629ED9089543196

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} kERSAllowed
 */
export function setVehicleKersAllowed(vehicle: VehicleIndex, kERSAllowed: boolean): void {
	const setVehicleKersAllowed_result = Citizen.invokeNative<void>('0xF629ED9089543196', vehicle, kERSAllowed);
	return setVehicleKersAllowed_result;
}