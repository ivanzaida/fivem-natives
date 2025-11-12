import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:INT_TO_PLAYERINDEX
 *
 * 0xB23E0F9B63D009A8

 * 
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} arg
 * @returns {PlayerIndex}  
 */
export function intToPlayerindex(arg: number): PlayerIndex {
	const intToPlayerindex_result = Citizen.invokeNative<PlayerIndex>('0xB23E0F9B63D009A8', arg);
	return intToPlayerindex_result;
}