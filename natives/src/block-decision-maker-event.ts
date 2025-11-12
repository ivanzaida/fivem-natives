import { DecisionMakerType, EEventNames } from '@ivanzaida/structures'

/**
 * EVENT:BLOCK_DECISION_MAKER_EVENT
 *
 * 0x7A4EC4F532D19DFA

 * 
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * This is limited to 4 blocked events at a time.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {DecisionMakerType} decisionMakerId
 * @param {EEventNames} eventType
 */
export function blockDecisionMakerEvent(decisionMakerId: DecisionMakerType, eventType: EEventNames | number): void {
	const blockDecisionMakerEvent_result = Citizen.invokeNative<void>('0x7A4EC4F532D19DFA', decisionMakerId, eventType);
	return blockDecisionMakerEvent_result;
}