import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:PRESENCE_EVENT_UPDATESTAT_INT
 *
 * 0x8DD7F37773EBD5B9

 * 
 * Send a presence event regarding a significant update of a stat.  Will result in a
 * EVENT_NETWORK_PRESENCE_STAT_UPDATE being received by all your friends
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} statId
 * @param {number} value
 * @param {number} value2
 */
export function presenceEventUpdatestatInt(statId: EStatsenum | number, value: number, value2: number = 0): void {
	const presenceEventUpdatestatInt_result = Citizen.invokeNative<void>('0x8DD7F37773EBD5B9', statId, value, value2);
	return presenceEventUpdatestatInt_result;
}