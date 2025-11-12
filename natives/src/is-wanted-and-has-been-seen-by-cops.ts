import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_WANTED_AND_HAS_BEEN_SEEN_BY_COPS
 *
 * 0x9780872414DA43F8

 * 
 * returns true if player is wanted and has been seen at least once by cops.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isWantedAndHasBeenSeenByCops(player: PlayerIndex): boolean {
	const isWantedAndHasBeenSeenByCops_result = Citizen.invokeNative<boolean>('0x9780872414DA43F8', player);
	return isWantedAndHasBeenSeenByCops_result;
}