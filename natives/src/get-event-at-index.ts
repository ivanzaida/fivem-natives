import { EScriptEventQueues, EEventNames } from '@ivanzaida/structures'

/**
 * SCRIPT:GET_EVENT_AT_INDEX
 *
 * 0x4BC3E5D2FB0A1665

 * 
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EScriptEventQueues} eventQueue
 * @param {number} event
 * @returns {EEventNames}  
 */
export function getEventAtIndex(eventQueue: EScriptEventQueues | number, event: number): EEventNames {
	const getEventAtIndex_result = Citizen.invokeNative<EEventNames>('0x4BC3E5D2FB0A1665', eventQueue, event);
	return getEventAtIndex_result;
}