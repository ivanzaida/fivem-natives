import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_USE_DESIRED_Z_CRUISE_SPEED_FOR_LANDING
 *
 * 0xB6D03E3DBCAF727F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setUseDesiredZCruiseSpeedForLanding(vehicle: VehicleIndex, val: boolean): void {
	const setUseDesiredZCruiseSpeedForLanding_result = Citizen.invokeNative<void>('0xB6D03E3DBCAF727F', vehicle, val);
	return setUseDesiredZCruiseSpeedForLanding_result;
}