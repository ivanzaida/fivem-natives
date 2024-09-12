import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_MAY_NOT_ENTER_ANY_VEHICLE
 *
 * 0xC33666575B6C63DB

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function setPlayerMayNotEnterAnyVehicle(player: PlayerIndex): void {
	const setPlayerMayNotEnterAnyVehicle_result = Citizen.invokeNative<void>('0xC33666575B6C63DB', player);
	return setPlayerMayNotEnterAnyVehicle_result;
}