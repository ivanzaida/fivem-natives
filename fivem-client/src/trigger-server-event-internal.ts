/**
 * CFX:TRIGGER_SERVER_EVENT_INTERNAL
 *
 * 0x7FDD1128

 * The backing function for TriggerServerEvent.
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @param {string} eventPayload
 * @param {number} payloadLength
 */
export function triggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
	const triggerServerEventInternal_result = Citizen.invokeNative<void>('0x7FDD1128', eventName, eventPayload, payloadLength);
	return triggerServerEventInternal_result;
}