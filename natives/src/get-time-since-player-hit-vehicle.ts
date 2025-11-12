import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_TIME_SINCE_PLAYER_HIT_VEHICLE
 *
 * 0x750EA8475280B86D

 * 
 * The player has to be in a car himself to do this. Can be used to detect whether the player is driving recklessly.
 * Before the player hits anything the return value is really large.
 * To see what the command would return use the debug widget: 'Car AI and Nodes/Display Reckless driving debug'
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getTimeSincePlayerHitVehicle(player: PlayerIndex): number {
	const getTimeSincePlayerHitVehicle_result = Citizen.invokeNative<number>('0x750EA8475280B86D', player);
	return getTimeSincePlayerHitVehicle_result;
}