import { VehicleIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_DOORS_LOCKED_FOR_PLAYER
 *
 * 0x75B56675BF83B3BC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function getVehicleDoorsLockedForPlayer(vehicle: VehicleIndex, player: PlayerIndex): boolean {
	const getVehicleDoorsLockedForPlayer_result = Citizen.invokeNative<boolean>('0x75B56675BF83B3BC', vehicle, player);
	return getVehicleDoorsLockedForPlayer_result;
}