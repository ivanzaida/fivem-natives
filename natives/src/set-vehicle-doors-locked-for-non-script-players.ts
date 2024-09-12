import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOORS_LOCKED_FOR_NON_SCRIPT_PLAYERS
 *
 * 0x0B1BCFB3741AF8B2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} locked
 */
export function setVehicleDoorsLockedForNonScriptPlayers(vehicle: VehicleIndex, locked: boolean): void {
	const setVehicleDoorsLockedForNonScriptPlayers_result = Citizen.invokeNative<void>('0x0B1BCFB3741AF8B2', vehicle, locked);
	return setVehicleDoorsLockedForNonScriptPlayers_result;
}