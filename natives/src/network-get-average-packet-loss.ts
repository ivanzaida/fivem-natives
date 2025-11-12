import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_AVERAGE_PACKET_LOSS
 *
 * 0xA26711392EBF5371

 * 
 * Returns a packet loss metric for packets send to the specified remote player. This is just a ratio of sync messages acked divided by sync messages sent.
 * This should only be called on remote players.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function networkGetAveragePacketLoss(player: PlayerIndex): number {
	const networkGetAveragePacketLoss_result = Citizen.invokeNative<number>('0xA26711392EBF5371', player);
	return networkGetAveragePacketLoss_result;
}