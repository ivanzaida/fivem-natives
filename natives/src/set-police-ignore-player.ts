import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_POLICE_IGNORE_PLAYER
 *
 * 0xDAA51A56DBEC0391

 * 
 * The player will be ignored by the police if toggle is set to true
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} ignorePlayer
 */
export function setPoliceIgnorePlayer(player: PlayerIndex, ignorePlayer: boolean): void {
	const setPoliceIgnorePlayer_result = Citizen.invokeNative<void>('0xDAA51A56DBEC0391', player, ignorePlayer);
	return setPoliceIgnorePlayer_result;
}