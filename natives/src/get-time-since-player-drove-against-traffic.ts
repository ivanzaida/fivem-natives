import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_TIME_SINCE_PLAYER_DROVE_AGAINST_TRAFFIC
 *
 * 0x0A2AACDCE82B8394

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
export function getTimeSincePlayerDroveAgainstTraffic(player: PlayerIndex): number {
	const getTimeSincePlayerDroveAgainstTraffic_result = Citizen.invokeNative<number>('0x0A2AACDCE82B8394', player);
	return getTimeSincePlayerDroveAgainstTraffic_result;
}