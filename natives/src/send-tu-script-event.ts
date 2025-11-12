import { EScriptEventQueues } from '@ivanzaida/structures'

/**
 * SCRIPT:SEND_TU_SCRIPT_EVENT
 *
 * 0x01F0B819E78A18A1

 * 
 * See TRIGGER_SCRIPT_EVENT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EScriptEventQueues} eventQueue
 * @param {DataView} data [Ref]
 * @param {number} sizeOfData
 * @param {number} playerFlags
 */
export function sendTuScriptEvent(eventQueue: EScriptEventQueues | number, data: DataView /* ptr */, sizeOfData: number, playerFlags: number = 0): void {
	const sendTuScriptEvent_result = Citizen.invokeNative<void>('0x01F0B819E78A18A1', eventQueue, data, sizeOfData, playerFlags);
	return sendTuScriptEvent_result;
}