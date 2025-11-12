import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_TIME_SINCE_PLAYER_HIT_PED
 *
 * 0x98FA166AB01A46F7

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
export function getTimeSincePlayerHitPed(player: PlayerIndex): number {
	const getTimeSincePlayerHitPed_result = Citizen.invokeNative<number>('0x98FA166AB01A46F7', player);
	return getTimeSincePlayerHitPed_result;
}