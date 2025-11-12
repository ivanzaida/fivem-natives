import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_WANTED_LEVEL_DIFFICULTY
 *
 * 0x446468040E515438

 * 
 * Max value is 1.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} difficulty
 */
export function setWantedLevelDifficulty(player: PlayerIndex, difficulty: number): void {
	const setWantedLevelDifficulty_result = Citizen.invokeNative<void>('0x446468040E515438', player, difficulty);
	return setWantedLevelDifficulty_result;
}