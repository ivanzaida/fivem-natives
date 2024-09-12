import { EStatsenum } from '@ivanzaida/structures'

/**
 * STATS:PRESENCE_EVENT_UPDATESTAT_FLOAT
 *
 * 0xE9694EE166E27C86

 * 
 * ------------------------------------------------------------------
 * @param {EStatsenum} statId
 * @param {number} value
 * @param {number} value2
 */
export function presenceEventUpdatestatFloat(statId: EStatsenum | number, value: number, value2: number = 0): void {
	const presenceEventUpdatestatFloat_result = Citizen.invokeNative<void>('0xE9694EE166E27C86', statId, value, value2);
	return presenceEventUpdatestatFloat_result;
}