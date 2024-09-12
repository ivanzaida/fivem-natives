import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:PRESENCE_EVENT_UPDATESTAT_INT_WITH_STRING
 *
 * 0x0E6887182A0B2C89

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} statId
 * @param {number} value
 * @param {number} value2
 * @param {string} stringData
 */
export function presenceEventUpdatestatIntWithString(statId: EStatsenum | number, value: number, value2: number, stringData: string): void {
	const presenceEventUpdatestatIntWithString_result = Citizen.invokeNative<void>('0x0E6887182A0B2C89', statId, value, value2, stringData);
	return presenceEventUpdatestatIntWithString_result;
}