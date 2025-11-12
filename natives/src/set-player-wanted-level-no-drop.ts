import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WANTED_LEVEL_NO_DROP
 *
 * 0xF165EAD0AA08F3B6

 * 
 * p2 is always false in R scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} wantedLevel
 * @param {boolean} delayLawResponse
 */
export function setPlayerWantedLevelNoDrop(player: PlayerIndex, wantedLevel: number, delayLawResponse: boolean = false): void {
	const setPlayerWantedLevelNoDrop_result = Citizen.invokeNative<void>('0xF165EAD0AA08F3B6', player, wantedLevel, delayLawResponse);
	return setPlayerWantedLevelNoDrop_result;
}