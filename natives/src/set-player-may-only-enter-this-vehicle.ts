import { PlayerIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_MAY_ONLY_ENTER_THIS_VEHICLE
 *
 * 0x220BB75D2FDC7141

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {VehicleIndex} vehicleID
 */
export function setPlayerMayOnlyEnterThisVehicle(player: PlayerIndex, vehicleID: VehicleIndex): void {
	const setPlayerMayOnlyEnterThisVehicle_result = Citizen.invokeNative<void>('0x220BB75D2FDC7141', player, vehicleID);
	return setPlayerMayOnlyEnterThisVehicle_result;
}