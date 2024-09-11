import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOORS_LOCKED_FOR_ALL_TEAMS
 *
 * 0xA7AD7AB3035B02EA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} locked
 */
export function setVehicleDoorsLockedForAllTeams(vehicle: VehicleIndex, locked: boolean): void {
	const setVehicleDoorsLockedForAllTeams_result = Citizen.invokeNative<void>('0xA7AD7AB3035B02EA', vehicle, locked);
	return setVehicleDoorsLockedForAllTeams_result;
}