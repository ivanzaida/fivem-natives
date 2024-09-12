import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_UNDERWATER_TIME_REMAINING
 *
 * 0x941BFBB789EE4863

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerUnderwaterTimeRemaining(player: PlayerIndex): number {
	const getPlayerUnderwaterTimeRemaining_result = Citizen.invokeNative<number>('0x941BFBB789EE4863', player);
	return getPlayerUnderwaterTimeRemaining_result;
}