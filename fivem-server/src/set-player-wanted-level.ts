import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_WANTED_LEVEL
 *
 * 0xB7A0914B

 * 
 * The wanted level change will not take place for 10 seconds or su (emulating the time it takes a citizen to report the crime) unless SET_PLAYER_WANTED_LEVEL_NOW is called immediately after
 * 
 * Call SET_PLAYER_WANTED_LEVEL_NOW for immediate effect
 * 
 * wantedLevel is an integer value representing 0 to 5 stars even though the game supports the 6th wanted level but no police will appear since no definitions are present for it in the game files
 * 
 * disableNoMission-  Disables When Off Mission- appears to always be false
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player the target player
 * @param {number} wantedLevel the wanted level 15
 * @param {boolean} delayedResponse false = 010sec police spawn response time, true = 1020sec police spawn response time
 */
export function setPlayerWantedLevel(player: PlayerIndex, wantedLevel: number, delayedResponse: boolean): void {
	const setPlayerWantedLevel_result = Citizen.invokeNative<void>('0xB7A0914B', player, wantedLevel, delayedResponse);
	return setPlayerWantedLevel_result;
}