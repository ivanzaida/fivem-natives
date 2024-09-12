import { GamerHandle } from '@ivanzaida/structures'

/**
 * STATS:SEND_METRIC_GHOSTING_TO_PLAYER
 *
 * 0x1B045571F6FA298C

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 */
export function sendMetricGhostingToPlayer(gamer: GamerHandle /* ptr */): void {
	const sendMetricGhostingToPlayer_result = Citizen.invokeNative<void>('0x1B045571F6FA298C', gamer.dataView);
	return sendMetricGhostingToPlayer_result;
}