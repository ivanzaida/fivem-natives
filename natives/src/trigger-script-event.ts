import { EScriptEventQueues } from '@ivanzaida/structures'

/**
 * SCRIPT:TRIGGER_SCRIPT_EVENT
 *
 * 0x2C0E0814582947D3

 * 
 * eventGroup: 0 = SCRIPT_EVENT_QUEUE_AI (CEventGroupScriptAI), 1 = SCRIPT_EVENT_QUEUE_NETWORK (CEventGroupScriptNetwork)
 * 
 * Note: eventDataSize is NOT the size in bytes, it is the size determined by the SIZE_OF operator (RAGE Script operator, not C/C++ sizeof). That is, the size in bytes divided by 8 (script variables are always 8-byte aligned!).
 * 
 * playerBits (also known as playersToBroadcastTo) is a bitset that indicates which players this event should be sent to. In order to send the event to specific players only, use (1 << playerIndex). Set all bits if it should be broadcast to all players.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EScriptEventQueues} eventQueue
 * @param {DataView} data [Ref]
 * @param {number} sizeOfData
 * @param {number} playerFlags
 */
export function triggerScriptEvent(eventQueue: EScriptEventQueues | number, data: DataView /* ptr */, sizeOfData: number, playerFlags: number = 0): void {
	const triggerScriptEvent_result = Citizen.invokeNative<void>('0x2C0E0814582947D3', eventQueue, data, sizeOfData, playerFlags);
	return triggerScriptEvent_result;
}