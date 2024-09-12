import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_WANTED_LEVEL_HIDDEN_ESCAPE_TIME
 *
 * 0x64A38E41CEF44EEB

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} wantedLevel
 * @param {number} timeToEscape
 */
export function setWantedLevelHiddenEscapeTime(player: PlayerIndex, wantedLevel: number, timeToEscape: number): void {
	const setWantedLevelHiddenEscapeTime_result = Citizen.invokeNative<void>('0x64A38E41CEF44EEB', player, wantedLevel, timeToEscape);
	return setWantedLevelHiddenEscapeTime_result;
}