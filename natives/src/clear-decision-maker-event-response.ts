import { DecisionMakerType, EEventNames } from '@ivanzaida/structures'

/**
 * EVENT:CLEAR_DECISION_MAKER_EVENT_RESPONSE
 *
 * 0x0A0952DE8943B17C

 * 
 * eventType: https://alloc8or.re/gta5/doc/enums/eEventType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {DecisionMakerType} decisionMakerId
 * @param {EEventNames} eventType
 */
export function clearDecisionMakerEventResponse(decisionMakerId: DecisionMakerType, eventType: EEventNames | number): void {
	const clearDecisionMakerEventResponse_result = Citizen.invokeNative<void>('0x0A0952DE8943B17C', decisionMakerId, eventType);
	return clearDecisionMakerEventResponse_result;
}