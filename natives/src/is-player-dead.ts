import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_DEAD
 *
 * 0xD5FF242D0AFC5855

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerDead(player: PlayerIndex): boolean {
	const isPlayerDead_result = Citizen.invokeNative<boolean>('0xD5FF242D0AFC5855', player);
	return isPlayerDead_result;
}