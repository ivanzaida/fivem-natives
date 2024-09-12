import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_DISPATCH_COPS_FOR_PLAYER
 *
 * 0xE383E18054CA323B

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} flag
 */
export function setDispatchCopsForPlayer(player: PlayerIndex, flag: boolean): void {
	const setDispatchCopsForPlayer_result = Citizen.invokeNative<void>('0xE383E18054CA323B', player, flag);
	return setDispatchCopsForPlayer_result;
}