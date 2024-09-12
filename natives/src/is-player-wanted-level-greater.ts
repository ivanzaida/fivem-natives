import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_WANTED_LEVEL_GREATER
 *
 * 0x3EE1A6D743332852

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} wantedLevel
 * @returns {boolean}  
 */
export function isPlayerWantedLevelGreater(player: PlayerIndex, wantedLevel: number): boolean {
	const isPlayerWantedLevelGreater_result = Citizen.invokeNative<boolean>('0x3EE1A6D743332852', player, wantedLevel);
	return isPlayerWantedLevelGreater_result;
}