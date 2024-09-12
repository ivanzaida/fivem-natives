import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:RESET_WANTED_LEVEL_HIDDEN_ESCAPE_TIME
 *
 * 0x252B3E511E67DD84

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function resetWantedLevelHiddenEscapeTime(player: PlayerIndex): void {
	const resetWantedLevelHiddenEscapeTime_result = Citizen.invokeNative<void>('0x252B3E511E67DD84', player);
	return resetWantedLevelHiddenEscapeTime_result;
}