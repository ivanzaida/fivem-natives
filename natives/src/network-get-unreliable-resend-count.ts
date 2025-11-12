import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_UNRELIABLE_RESEND_COUNT
 *
 * 0x7D17572D1EE9D0A9

 * 
 * Returns the number unreliable messages that have been resent to the specified remote player within a sampling interval
 * This should only be called on remote players.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetUnreliableResendCount(player: PlayerIndex): number {
	const networkGetUnreliableResendCount_result = Citizen.invokeNative<number>('0x7D17572D1EE9D0A9', player);
	return networkGetUnreliableResendCount_result;
}