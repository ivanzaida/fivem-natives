import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WANTED_LEVEL
 *
 * 0xE20A252886E4FE1D

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
 * @param {PlayerIndex} player
 * @param {number} wantedLevel
 * @param {boolean} delayLawResponse
 */
export function setPlayerWantedLevel(player: PlayerIndex, wantedLevel: number, delayLawResponse: boolean = false): void {
	const setPlayerWantedLevel_result = Citizen.invokeNative<void>('0xE20A252886E4FE1D', player, wantedLevel, delayLawResponse);
	return setPlayerWantedLevel_result;
}