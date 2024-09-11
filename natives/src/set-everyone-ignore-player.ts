import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_EVERYONE_IGNORE_PLAYER
 *
 * 0x3AFFD31224BF9207

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} ignorePlayer
 */
export function setEveryoneIgnorePlayer(player: PlayerIndex, ignorePlayer: boolean): void {
	const setEveryoneIgnorePlayer_result = Citizen.invokeNative<void>('0x3AFFD31224BF9207', player, ignorePlayer);
	return setEveryoneIgnorePlayer_result;
}