import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_FORCE_AFTERBURNER
 *
 * 0xA43283449133E803

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} afterburnerOn
 */
export function setVehicleForceAfterburner(vehicle: VehicleIndex, afterburnerOn: boolean): void {
	const setVehicleForceAfterburner_result = Citizen.invokeNative<void>('0xA43283449133E803', vehicle, afterburnerOn);
	return setVehicleForceAfterburner_result;
}