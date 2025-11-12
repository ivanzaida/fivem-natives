import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WANTED_LEVEL_NOW
 *
 * 0x42C9A22D6724F283

 * 
 * Forces any pending wanted level to be applied to the specified player immediately.
 * 
 * Call SET_PLAYER_WANTED_LEVEL with the desired wanted level, followed by SET_PLAYER_WANTED_LEVEL_NOW.
 * 
 * Second parameter is unknown (always false).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} delayLawResponse
 */
export function setPlayerWantedLevelNow(player: PlayerIndex, delayLawResponse: boolean = false): void {
	const setPlayerWantedLevelNow_result = Citizen.invokeNative<void>('0x42C9A22D6724F283', player, delayLawResponse);
	return setPlayerWantedLevelNow_result;
}