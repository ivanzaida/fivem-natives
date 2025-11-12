import { EScriptEventQueues } from '@ivanzaida/structures'

/**
 * SCRIPT:GET_EVENT_DATA
 *
 * 0xFCEF367B86651ED3

 * 
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EScriptEventQueues} eventQueue
 * @param {number} event
 * @param {DataView} data [Ref]
 * @param {number} dataSize
 * @returns {boolean}  
 */
export function getEventData(eventQueue: EScriptEventQueues | number, event: number, data: DataView /* ptr */, dataSize: number): boolean {
	const getEventData_result = Citizen.invokeNative<boolean>('0xFCEF367B86651ED3', eventQueue, event, data, dataSize);
	return getEventData_result;
}