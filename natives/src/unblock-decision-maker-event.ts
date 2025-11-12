import { DecisionMakerType, EEventNames } from '@ivanzaida/structures'

/**
 * EVENT:UNBLOCK_DECISION_MAKER_EVENT
 *
 * 0x6E32AA16336291E4

 * 
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {DecisionMakerType} decisionMakerId
 * @param {EEventNames} eventType
 */
export function unblockDecisionMakerEvent(decisionMakerId: DecisionMakerType, eventType: EEventNames | number): void {
	const unblockDecisionMakerEvent_result = Citizen.invokeNative<void>('0x6E32AA16336291E4', decisionMakerId, eventType);
	return unblockDecisionMakerEvent_result;
}