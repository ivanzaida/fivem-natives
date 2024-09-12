import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:RESET_WANTED_LEVEL_DIFFICULTY
 *
 * 0xF58D3BBA4A469D70

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function resetWantedLevelDifficulty(player: PlayerIndex): void {
	const resetWantedLevelDifficulty_result = Citizen.invokeNative<void>('0xF58D3BBA4A469D70', player);
	return resetWantedLevelDifficulty_result;
}