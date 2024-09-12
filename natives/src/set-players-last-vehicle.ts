import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLAYERS_LAST_VEHICLE
 *
 * 0xE3A0299C9DEE59C8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setPlayersLastVehicle(vehicle: VehicleIndex): void {
	const setPlayersLastVehicle_result = Citizen.invokeNative<void>('0xE3A0299C9DEE59C8', vehicle);
	return setPlayersLastVehicle_result;
}