import { PedIndex, DecisionMakerType } from '@ivanzaida/structures'

/**
 * TASK:TASK_SET_DECISION_MAKER
 *
 * 0x4A01AD13AAA82768

 * 
 * p1 is always GET_HASH_KEY("empty") in scripts, for the rare times this is used
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {DecisionMakerType} decisionMakerId
 */
export function taskSetDecisionMaker(ped: PedIndex, decisionMakerId: DecisionMakerType): void {
	const taskSetDecisionMaker_result = Citizen.invokeNative<void>('0x4A01AD13AAA82768', ped, decisionMakerId);
	return taskSetDecisionMaker_result;
}