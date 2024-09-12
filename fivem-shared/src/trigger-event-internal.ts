/**
 * CFX:TRIGGER_EVENT_INTERNAL
 *
 * 0X91310870

 * The backing function for TriggerEvent.
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @param {string} eventPayload
 * @param {number} payloadLength
 */
export function triggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void {
	const triggerEventInternal_result = Citizen.invokeNative<void>('0X91310870', eventName, eventPayload, payloadLength);
	return triggerEventInternal_result;
}