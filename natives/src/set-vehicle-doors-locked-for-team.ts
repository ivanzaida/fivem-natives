import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOORS_LOCKED_FOR_TEAM
 *
 * 0xBF60B9A0E651D89B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} team
 * @param {boolean} locked
 */
export function setVehicleDoorsLockedForTeam(vehicle: VehicleIndex, team: number, locked: boolean): void {
	const setVehicleDoorsLockedForTeam_result = Citizen.invokeNative<void>('0xBF60B9A0E651D89B', vehicle, team, locked);
	return setVehicleDoorsLockedForTeam_result;
}