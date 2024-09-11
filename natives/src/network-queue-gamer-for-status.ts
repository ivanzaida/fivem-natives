import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_QUEUE_GAMER_FOR_STATUS
 *
 * 0xA35EFADA8B877384

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkQueueGamerForStatus(gamer: GamerHandle /* ptr */): boolean {
	const networkQueueGamerForStatus_result = Citizen.invokeNative<boolean>('0xA35EFADA8B877384', gamer.dataView);
	return networkQueueGamerForStatus_result;
}