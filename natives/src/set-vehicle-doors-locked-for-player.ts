import { VehicleIndex, PlayerIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DOORS_LOCKED_FOR_PLAYER
 *
 * 0x60C8432F4C0BDD68

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {PlayerIndex} player
 * @param {boolean} locked
 */
export function setVehicleDoorsLockedForPlayer(vehicle: VehicleIndex, player: PlayerIndex, locked: boolean): void {
	const setVehicleDoorsLockedForPlayer_result = Citizen.invokeNative<void>('0x60C8432F4C0BDD68', vehicle, player, locked);
	return setVehicleDoorsLockedForPlayer_result;
}