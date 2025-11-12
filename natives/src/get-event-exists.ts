import { EScriptEventQueues, EEventNames } from '@ivanzaida/structures'

/**
 * SCRIPT:GET_EVENT_EXISTS
 *
 * 0x5E3ED023C0E7CC7C

 * 
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EScriptEventQueues} eventQueue
 * @param {EEventNames} eventType
 * @returns {boolean}  
 */
export function getEventExists(eventQueue: EScriptEventQueues | number, eventType: EEventNames | number): boolean {
	const getEventExists_result = Citizen.invokeNative<boolean>('0x5E3ED023C0E7CC7C', eventQueue, eventType);
	return getEventExists_result;
}