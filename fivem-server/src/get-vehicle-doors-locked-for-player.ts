import { VehicleIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER
 *
 * 0x1DC50247

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function getVehicleDoorsLockedForPlayer(vehicle: VehicleIndex, player: PlayerIndex): boolean {
	const getVehicleDoorsLockedForPlayer_result = Citizen.invokeNative<boolean>('0x1DC50247', vehicle, player);
	return getVehicleDoorsLockedForPlayer_result;
}