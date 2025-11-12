import { EScriptEventQueues } from '@ivanzaida/structures'

/**
 * SCRIPT:GET_NUMBER_OF_EVENTS
 *
 * 0x703C4F7316B7195D

 * 
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EScriptEventQueues} eventQueue
 * @returns {number}  
 */
export function getNumberOfEvents(eventQueue: EScriptEventQueues | number): number {
	const getNumberOfEvents_result = Citizen.invokeNative<number>('0x703C4F7316B7195D', eventQueue);
	return getNumberOfEvents_result;
}