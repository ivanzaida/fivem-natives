/**
 * CFX:TRIGGER_CLIENT_EVENT_INTERNAL
 *
 * 0X2F7A49E6

 * The backing function for TriggerClientEvent.
 * 
 * ------------------------------------------------------------------
 * @param {string} eventName
 * @param {string} eventTarget
 * @param {string} eventPayload
 * @param {number} payloadLength
 */
export function triggerClientEventInternal(eventName: string, eventTarget: string, eventPayload: string, payloadLength: number): void {
	const triggerClientEventInternal_result = Citizen.invokeNative<void>('0X2F7A49E6', eventName, eventTarget, eventPayload, payloadLength);
	return triggerClientEventInternal_result;
}