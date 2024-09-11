import { PedIndex, DecisionMakerType } from '@ivanzaida/structures'

/**
 * EVENT:SET_DECISION_MAKER
 *
 * 0x26FA2603829F9CF9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {DecisionMakerType} decisionMakerId
 */
export function setDecisionMaker(ped: PedIndex, decisionMakerId: DecisionMakerType): void {
	const setDecisionMaker_result = Citizen.invokeNative<void>('0x26FA2603829F9CF9', ped, decisionMakerId);
	return setDecisionMaker_result;
}