import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_TIME_SINCE_PLAYER_DROVE_ON_PAVEMENT
 *
 * 0xAEAB3904F55BB907

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
export function getTimeSincePlayerDroveOnPavement(player: PlayerIndex): number {
	const getTimeSincePlayerDroveOnPavement_result = Citizen.invokeNative<number>('0xAEAB3904F55BB907', player);
	return getTimeSincePlayerDroveOnPavement_result;
}