import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_ALL_RANDOM_PEDS_FLEE
 *
 * 0xAC50C24F47D00104

 * 
 * Deprecated! Please now use SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} pedsFlee
 */
export function setAllRandomPedsFlee(player: PlayerIndex, pedsFlee: boolean): void {
	const setAllRandomPedsFlee_result = Citizen.invokeNative<void>('0xAC50C24F47D00104', player, pedsFlee);
	return setAllRandomPedsFlee_result;
}