import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_HIGHEST_RELIABLE_RESEND_COUNT
 *
 * 0x2031266910F9D195

 * 
 * Returns the higest number of times a reliable message currently on the queue has been resent to a remote player (the player
 * will be disconnected if it gets too high)
 * This should only be called on remote players.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetHighestReliableResendCount(player: PlayerIndex): number {
	const networkGetHighestReliableResendCount_result = Citizen.invokeNative<number>('0x2031266910F9D195', player);
	return networkGetHighestReliableResendCount_result;
}