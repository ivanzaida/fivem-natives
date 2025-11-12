import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_ALL_NEUTRAL_RANDOM_PEDS_FLEE
 *
 * 0x8D76C231AB0E62A1

 * 
 * Deprectaed! Please now use SET_ALL_NEUTRAL_RANDOM_PEDS_FLEE_THIS_FRAME
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} pedsFlee
 */
export function setAllNeutralRandomPedsFlee(player: PlayerIndex, pedsFlee: boolean): void {
	const setAllNeutralRandomPedsFlee_result = Citizen.invokeNative<void>('0x8D76C231AB0E62A1', player, pedsFlee);
	return setAllNeutralRandomPedsFlee_result;
}